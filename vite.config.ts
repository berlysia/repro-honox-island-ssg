import ssg from "@hono/vite-ssg";
import build from "@hono/vite-build/bun";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client()],
    };
  }
  if (mode === "ssg") {
    return {
      build: {
        emptyOutDir: false,
      },
      plugins: [honox(), ssg({ entry })],
    };
  }

  if (mode === "ssr") {
    return {
      build: {
        emptyOutDir: false,
      },
      plugins: [honox(), build({ entry })],
    };
  }

  // for dev
  return {
    plugins: [honox(), client()],
  };
});
