const path = require("path");
const commander = require("commander");
const express = require("express");

const command = commander
  .createCommand()
  .requiredOption("-d, --dist <path>", "dist folder to serve")
  .requiredOption("-p, --port <port>", "port to listen on")
  .option("--br");
command.parse();
const opts = command.opts();

const app = express();
app.use(
  express.static(path.resolve(process.env.INIT_CWD, opts.dist), {
    setHeaders: (res, path) => {
      if (opts.br) {
        if (path.endsWith(".br")) {
          res.setHeader("Content-Encoding", "br");
        }
      }
    },
  })
);

app.listen(opts.port, () => {
  console.log(`Listening on port http://localhost:${opts.port}`);
});
