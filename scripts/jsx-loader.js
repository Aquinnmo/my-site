import { readFile } from 'fs/promises';
import { transform } from 'esbuild';

export async function load(url, context, defaultLoad) {
  if (url.endsWith('.css')) {
    return {
      format: 'module',
      source: 'export default {};',
      shortCircuit: true,
    };
  }

  if (url.endsWith('.jsx')) {
    const source = await readFile(new URL(url), 'utf8');
    const { code } = await transform(source, {
      loader: 'jsx',
      jsx: 'automatic',
      format: 'esm',
      sourcefile: url,
    });
    return {
      format: 'module',
      source: code,
      shortCircuit: true,
    };
  }

  return defaultLoad(url, context, defaultLoad);
}
