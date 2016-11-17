console.log("view.js loads");

require('jquery');

let container = $("#container");

let Print = function(treeObject) {
  container.append(`${treeObject.name}<br>`);
};

module.exports = Print;