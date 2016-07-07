var server = require("http");
var route = require("./routes.js");

server.createServer(function (request, response) {
  route.index(request, response);
  route.account(request, response);
  route.browse(request, response);
  route.cart(request, response);
  route.categories(request, response);
  route.checkout(request, response);
  route.product(request, response);
  route.products(request, response);
  route.reports(request, response);
  route.search(request, response);
  route.settings(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');
