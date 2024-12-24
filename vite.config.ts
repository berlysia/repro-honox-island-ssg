import ssg from "@hono/vite-ssg";
import build from "@hono/vite-build/bun";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

const common = {
  ssr: {
    external: ["react", "react-dom"],
  },
};

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      ...common,
      plugins: [client()],
    };
  }
  if (mode === "ssg") {
    return {
      build: {
        emptyOutDir: false,
      },
      ...common,
      plugins: [honox(), ssg({ entry })],
    };
  }

  if (mode === "ssr") {
    return {
      build: {
        emptyOutDir: false,
      },
      ...common,
      plugins: [honox(), build({ entry })],
    };
  }

  // for dev
  return {
    ...common,
    plugins: [honox(), client()],
  };
});
