import { h, json, serve } from "https://deno.land/x/sift/mod.ts";


serve({
  "/": () => json({ message: "Hello world" })
});
