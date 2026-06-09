import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { transformSync } from 'esbuild';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(rootDir, '..');
const targetDirs = [path.join(projectDir, 'src'), path.join(projectDir, 'scripts')];

const jsExtensions = new Set(['.js', '.jsx']);
let hasErrors = false;

async function collectFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(entryPath));
    } else if (jsExtensions.has(path.extname(entry.name))) {
      files.push(entryPath);
    }
  }
  return files;
}

async function lintFile(filePath) {
  const code = await fs.readFile(filePath, 'utf8');
  const relativePath = path.relative(projectDir, filePath);
  try {
    transformSync(code, {
      loader: 'jsx',
      jsx: 'automatic',
      sourcefile: relativePath,
    });
  } catch (error) {
    hasErrors = true;
    console.error(`\nLint error in ${relativePath}:`);
    if (error.errors && error.errors.length > 0) {
      for (const issue of error.errors) {
        console.error(`  > ${issue.text}`);
        if (issue.location) {
          console.error(`    at line ${issue.location.line}, column ${issue.location.column}`);
        }
      }
    } else {
      console.error(error.message);
    }
  }

  const lintScriptPath = path.join('scripts', 'lint.js');
  if (!relativePath.endsWith(lintScriptPath) && code.includes('eval(')) {
    hasErrors = true;
    console.error(`\nSecurity lint error in ${relativePath}: eval is disallowed.`);
  }
}

async function main() {
  for (const dir of targetDirs) {
    try {
      const files = await collectFiles(dir);
      for (const file of files) {
        await lintFile(file);
      }
    } catch (error) {
      if (error.code === 'ENOENT') {
        continue;
      }
      throw error;
    }
  }

  if (hasErrors) {
    console.error('\nLinting failed.');
    process.exitCode = 1;
  } else {
    console.log('Linting passed.');
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
