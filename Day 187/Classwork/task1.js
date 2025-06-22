const os = require("os");
const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const process = require("process");

const server = {};

server.platform = os.platform();
server.cpuArch = os.arch();
server.freeMemory = os.freemem();
server.totalMemory = os.totalmem();

server.httpServer = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("მოგესალმებით Node.js სერვერზე!");
});

server.baseName = path.basename(__filename);
server.dirName = __dirname;

fs.readFile(__filename, "utf8", (err, data) => {
  if (!err) {
    server.filePreview = data.slice(0, 100);
  }
});

server.memoryUsage = process.memoryUsage();

const args = process.argv.slice(2);
server.arguments = args.map(Number);

server.httpServer.listen(3000, () => {
  console.log("");
});

setTimeout(() => {
  console.log(server);
}, 500);
