import { serve, serveStatic } from "https://deno.land/x/sift@0.4.1/mod.ts";

serve({
  "/": serveStatic("public/index.html", { baseUrl: import.meta.url }),
  "/:filename+": serveStatic("public", { baseUrl: import.meta.url }),
});