var fs = require("fs");

function mergeValues(values, fileContents) {
  var content=fileContents;
  for(var key in values) {
    if(key==="stylesheet") {
      content=content.replace("{{"+key+"}}", fs.readFileSync(values[key], {encoding: "utf8"}));
    } else {
      content=content.replace("{{"+key+"}}", values[key]);
    }
  }
  return content;
}

/* Idea to test for loading images from node
function jpg(location, response) {
  //Read img file
  var imgFile = fs.readFileSync(location, {encoding: 'utf-8'});
  response.writeHead(200, {'Content-Type': 'image/jpeg'});
  response.write(imgFile);
  response.end();
}
*/

function view(templateName, values, response) {
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
  fileContents=mergeValues(values, fileContents);
  response.write(fileContents);
}

module.exports.view = view;
