var views = require("./views.js");
var html='"Content-Type": "text/html"';

function pages(request, response) {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    if(request.url === "/") {
      views.view("index", {}, response);
    } else if (request.url === "/account") {
      views.view("account", {}, response);
    } else if(request.url === "/admin") {
      views.view("admin", {}, response);
    } else if(request.url === "/browse") {
      views.view("browse", {}, response);
    } else if(request.url === "/cart") {
      views.view("cart", {}, response);
    } else if(request.url === "/admin/categories") {
      views.view("categories", {}, response);
    } else if(request.url === "/checkout") {
      views.view("checkout", {}, response);
    } else if(request.url === "/product") {
      views.view("product", {}, response);
    } else if(request.url === "/admin/products") {
      views.view("products", {}, response);
    } else if(request.url === "/admin/reports") {
      views.view("reports", {}, response);
    } else if(request.url === "/search") {
      views.view("search", {}, response);
    } else if(request.url === "/admin/settings") {
      views.view("settings", {}, response);
    } else {
      views.view("404", {}, response);
    }
    views.view("footer", {}, response);
    response.end();
}

module.exports.pages = pages;
