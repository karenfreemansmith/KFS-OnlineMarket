var views = require("./views.js");
var html='"Content-Type": "text/html"';


function front(request, response) {
  if(request.url === "/") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("front", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function job(request, response) {
  if(request.url === "/job") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("job", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function jobs(request, response) {
  if(request.url === "/jobs") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("jobs", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function profile(request, response) {
  if(request.url === "/profile") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("profile", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function profiles(request, response) {
  if(request.url === "/profiles") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("profiles", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function employers(request, response) {
  if(request.url === "/employers") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("employers", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function applicants(request, response) {
  if(request.url === "/applicants") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("applicants", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function company(request, response) {
  if(request.url === "/company") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("company", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function cover(request, response) {
  if(request.url === "/application") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("cover", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

module.exports.front = front;
module.exports.job = job;
module.exports.jobs = jobs;
module.exports.profile = profile;
module.exports.profiles = profiles;
module.exports.applicants = applicants;
module.exports.employers = employers;
module.exports.company = company;
module.exports.cover = cover;
