async function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);
  if (pathname.startsWith("/deno.png")) {
    const file = await Deno.readFile("./deno.png");
    return new Response(file, {
      headers: {
        "content-type": "image/png",
      },
    });
  }

  return new Response(
    `<html>
        <head>
        </head>
        <body>
          <h1>Example</h1>
          <img src="deno.png">
        </body>
      </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    }
  );
}

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});
