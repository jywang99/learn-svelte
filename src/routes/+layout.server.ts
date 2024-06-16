// server-side rendering
// false = single-page application
export const ssr = false;

// client-side rendering
// false = no js on client
export const csr = true;

// Prerendering means generating HTML for a page once, at build time, rather than dynamically for each request
// no effect when running in dev mode
export const prerender = true;

// never: strip trailing slashes
// always: append trailing slashes
// ignore: do nothing
export const trailingSlash = 'never';
