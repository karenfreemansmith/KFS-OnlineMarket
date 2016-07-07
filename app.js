var server = require("http");
var route = require("./routes.js");

server.createServer(function (request, response) {
  route.front(request, response);
  route.job(request, response);
  route.jobs(request, response);
  route.profile(request, response);
  route.profiles(request, response);
  route.applicants(request, response);
  route.company(request, response);
  route.employers(request, response);
  route.cover(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');
