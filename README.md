

## repro

```sh
bun install
bun run build
```

```
$ bun run build
$ vite build --mode client && vite build
vite v5.1.1 building for client...
✓ 23 modules transformed.
dist/.vite/manifest.json         0.37 kB │ gzip: 0.19 kB
dist/static/counter-BOkkX1zJ.js  0.37 kB │ gzip: 0.27 kB
dist/static/client-qvhPWvF1.js   9.58 kB │ gzip: 4.31 kB
✓ built in 106ms
GET  /
Build files into temp directory: .hono
Generated: .hono/index.html
vite v5.1.1 building SSR bundle for production...
✓ 7 modules transformed.
error during build:
Error: [vite]: Rollup failed to resolve import "/static/client-qvhPWvF1.js" from "(snip)/honox-island-repro/.hono/index.html".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`build.rollupOptions.external`
    at viteWarn (file://(snip)/honox-island-repro/node_modules/vite/dist/node/chunks/dep-94_H5fT6.js:67038:27)
    at onRollupWarning (file://(snip)/honox-island-repro/node_modules/vite/dist/node/chunks/dep-94_H5fT6.js:67066:9)
    at onwarn (file://(snip)/honox-island-repro/node_modules/vite/dist/node/chunks/dep-94_H5fT6.js:66777:13)
    at file://(snip)/honox-island-repro/node_modules/rollup/dist/es/shared/node-entry.js:17457:13
    at Object.logger [as onLog] (file://(snip)/honox-island-repro/node_modules/rollup/dist/es/shared/node-entry.js:19117:9)
    at ModuleLoader.handleInvalidResolvedId (file://(snip)/honox-island-repro/node_modules/rollup/dist/es/shared/node-entry.js:18061:26)
    at file://(snip)/honox-island-repro/node_modules/rollup/dist/es/shared/node-entry.js:18019:26
error: script "build" exited with code 1
```