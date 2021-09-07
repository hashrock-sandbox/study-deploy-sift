import { h, json, serve, serveStatic } from "https://deno.land/x/sift/mod.ts";

serve({
  "/deno.png": serveStatic("deno.png"),
  "/": () => json({ message: "Hello world" })
});
