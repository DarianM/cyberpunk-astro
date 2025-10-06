import type { APIContext, MiddlewareNext } from "astro";

export async function onRequest(context: APIContext, next: MiddlewareNext) {
  const response = await next();

  // Set Cross-Origin-Opener-Policy header
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");

  return response;
}
