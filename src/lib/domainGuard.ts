const CANONICAL_HOST = "elsa-albania.org";
const ALLOWED_HOSTS = new Set([
  CANONICAL_HOST,
  `www.${CANONICAL_HOST}`,
  "localhost",
  "127.0.0.1",
]);

/**
 * Redirects to the canonical domain if the site is being served from an
 * unexpected host. This catches naive clone/scrape-and-rehost attacks where
 * someone copies the static bundle and serves it under a look-alike domain.
 *
 * Call once at application startup (before React renders).
 */
export function enforceDomain(): void {
  const { hostname, pathname, search, hash } = window.location;

  if (ALLOWED_HOSTS.has(hostname)) return;

  const canonical = `https://${CANONICAL_HOST}${pathname}${search}${hash}`;
  window.location.replace(canonical);
}
