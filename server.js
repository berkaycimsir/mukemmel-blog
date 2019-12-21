const express = require("express");
const nextJS = require("next");

async function start() {
  const dev = process.env.NODE_ENV !== "production";
  const port = parseInt(process.env.PORT, 10) || 3000;
  const app = nextJS({ dev });
  const server = express();
  await app.prepare();

  // Redirect all requests to main entrypoint pages/index.js
  server.get("/*", async (req, res, next) => {
    try {
      app.render(req, res, "/");
    } catch (e) {
      next(e);
    }
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}

start();
