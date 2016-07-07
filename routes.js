var views = require("./views.js");
var html='"Content-Type": "text/html"';


function index(request, response) {
  if(request.url === "/") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("index", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function account(request, response) {
  if(request.url === "/account") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("account", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function admin(request, response) {
  if(request.url === "/admin") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("admin", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function browse(request, response) {
  if(request.url === "/browse") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("browse", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function cart(request, response) {
  if(request.url === "/cart") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("cart", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function categories(request, response) {
  if(request.url === "/admin/categories") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("categories", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function checkout(request, response) {
  if(request.url === "/checkout") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("checkout", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function product(request, response) {
  if(request.url === "/product") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("product", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function products(request, response) {
  if(request.url === "/admin/products") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("products", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function reports(request, response) {
  if(request.url === "/admin/reports") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("reports", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function search(request, response) {
  if(request.url === "/search") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("search", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function settings(request, response) {
  if(request.url === "/admin/settings") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("settings", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

module.exports.index = index;
module.exports.account = account;
module.exports.admin = admin;
module.exports.browse = browse;
module.exports.cart = cart;
module.exports.categories = categories;
module.exports.checkout = checkout;
module.exports.product = product;
module.exports.products = products;
module.exports.reports = reports;
module.exports.search = search;
module.exports.settings = settings;
