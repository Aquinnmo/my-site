import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

const noop = () => {};
const classList = { add: noop, remove: noop };

globalThis.document = {
  querySelector: () => null,
  body: { classList },
};

globalThis.window = {
  innerWidth: 1024,
  addEventListener: noop,
  removeEventListener: noop,
  scrollTo: noop,
  document: globalThis.document,
};

describe('Montgomery Software Foundry page', () => {
  beforeEach(() => {
    window.addEventListener = noop;
    window.removeEventListener = noop;
    window.scrollTo = noop;
  });

  it('renders hero content and calls to action', async () => {
    window.innerWidth = 1024;
    const { default: Foundry } = await import('../src/pages/MontgomerySoftwareFoundry.jsx');
    const element = React.createElement(
      MemoryRouter,
      { initialEntries: ['/foundry'] },
      React.createElement(Foundry)
    );
    const html = renderToString(element);
    assert.match(html, /Montgomery Software Foundry Inc\./);
    assert.match(html, /Start a project/);
    assert.match(html, /Explore recent work/);
    assert.ok(html.includes('margin-top:40px'));
  });

  it('adjusts layout spacing for mobile widths', async () => {
    window.innerWidth = 480;
    const { default: Foundry } = await import('../src/pages/MontgomerySoftwareFoundry.jsx');
    const element = React.createElement(
      MemoryRouter,
      { initialEntries: ['/foundry'] },
      React.createElement(Foundry)
    );
    const html = renderToString(element);
    assert.ok(html.includes('margin-top:16px'));
  });
});

describe('Navbar navigation', () => {
  beforeEach(() => {
    document.querySelector = () => null;
    window.addEventListener = noop;
    window.removeEventListener = noop;
  });

  it('includes Foundry link on desktop', async () => {
    window.innerWidth = 1024;
    const { default: Navbar } = await import('../src/components/Navbar.jsx');
    const element = React.createElement(MemoryRouter, null, React.createElement(Navbar));
    const html = renderToString(element);
    assert.ok(html.includes('href="/foundry"'));
    assert.match(html, />Foundry</);
  });

  it('includes Foundry link in mobile menu', async () => {
    window.innerWidth = 480;
    const { default: Navbar } = await import('../src/components/Navbar.jsx');
    const element = React.createElement(MemoryRouter, null, React.createElement(Navbar));
    const html = renderToString(element);
    assert.ok(html.includes('href="/foundry"'));
  });
});
