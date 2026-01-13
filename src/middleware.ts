import type { APIContext, MiddlewareNext } from "astro";

export async function onRequest(context: APIContext, next: MiddlewareNext) {
  const response = await next();

  response.headers.set("Access-Control-Allow-Origin", "*");

  // Set Cross-Origin-Opener-Policy header
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");

  // response.headers.set('Content-Security-Policy',
  //   "script-src 'self' 'unsafe-inline' http://127.0.0.1:5173 http://localhost:5173; " +
  //   "img-src 'self' data: http://127.0.0.1:5173 http://localhost:5173; " +
  //   "connect-src 'self' http://127.0.0.1:* http://localhost:*"
  // );

  return response;
}
