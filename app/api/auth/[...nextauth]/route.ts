export { GET, POST } from "@/auth"
// https://authjs.dev/reference/nextjs を見ると
// export const runtime = "edge" 
// という記載があるが、これを有効化すると以下のエラーが発生する
/*
○ Compiling /api/auth/[...nextauth] ...
⨯ ./node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/index.html
Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> <!doctype html>
| <html>
| <head>
*/
