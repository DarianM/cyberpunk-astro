import type { APIContext, MiddlewareNext } from "astro";

export async function onRequest(context: APIContext, next: MiddlewareNext) {
  const response = await next();

  response.headers.set("Access-Control-Allow-Origin", "*");

  // Set Cross-Origin-Opener-Policy header
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");

  return response;
}
