## repro

```sh
bun install
# for dev
bun run dev
# for SSG + client
bun run serve-ssg
# for SSR
bun run serve-ssr
```

| provided on | consumed on | useContext on SSR/SSG | useContext on Client Side                               |
| ----------- | ----------- | --------------------- | ------------------------------------------------------- |
| normal      | island      | throws                | default value, does not receive new value(maybe absent) |
| normal      | normal      | provider value        | default value, does not receive new value(maybe absent) |
| island      | normal      | provider value        | provider value, does not receive new value              |
| island      | island      | throws                | provider value, does not receive new value              |
