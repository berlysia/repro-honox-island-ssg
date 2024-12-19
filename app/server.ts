import { showRoutes } from "hono/dev";
import { createApp } from "honox/server";
import path from "node:path";
import fsp from "node:fs/promises";
import fs from "node:fs";
import { Readable } from "node:stream";

const app = createApp();

app.get("*", async (ctx) => {
  // パスを読む
  const reqPath = ctx.req.path;
  // JS以外だったら404
  if (!reqPath.endsWith(".js")) {
    ctx.status(404);
    return ctx.body("404 Not Found");
  }
  // パスからファイル名を取得
  const fullPath = path.resolve(import.meta.dirname, "." + reqPath);
  // fullPathがimport.meta.dirname以下でない場合は404
  if (!fullPath.startsWith(import.meta.dirname)) {
    ctx.status(403);
    return ctx.body("403 Forbidden");
  }
  if (!(await fs.existsSync(fullPath))) {
    ctx.status(404);
    return ctx.body("404 Not Found");
  }
  // ファイルを取得
  const readStream = Readable.toWeb(fs.createReadStream(fullPath));
  // ファイルが存在しない場合は404
  // ファイルを返す
  ctx.header("Content-Type", "text/javascript");
  return ctx.body(readStream as unknown as ReadableStream);
});

showRoutes(app);

export default app;
