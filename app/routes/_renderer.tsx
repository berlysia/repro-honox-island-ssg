import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <Script src="/app/client.ts" />
        <Style />
      </head>
      <body>
        <header>
          <ul>
            <li>
              <a href="/provide-normal-consume-island">
                Provide normal, consume island
              </a>
            </li>
            <li>
              <a href="/provide-normal-consume-normal">
                Provide normal, consume normal
              </a>
            </li>
            <li>
              <a href="/provide-island-consume-normal">
                Provide island, consume normal
              </a>
            </li>
            <li>
              <a href="/provide-island-consume-island">
                Provide island, consume island
              </a>
            </li>
          </ul>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
});
