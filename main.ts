import { h, json, serve, serveStatic } from "https://deno.land/x/sift/mod.ts";

serve({
  "/deno.png": serveStatic("deno.png", { baseUrl: import.meta.url }),
  "/": () => json({ message: "Hello world" })
});
