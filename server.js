var http = require("http");

function onrequest(request, response) {
  response.writeHead(200, { "Context-Type": "text/plain" });
  response.write("Welcome to node.Js");
  response.end();
}

http.createServer(onrequest).listen(8000);
console.log("server created");