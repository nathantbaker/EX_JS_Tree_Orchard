console.log("view.js loads");

require('jquery');

let container = $("#container");

let Print = function(treeObject) {
  container.append(`<p>${treeObject.name} is now ${treeObject.height}cm tall and has ${treeObject.branches} branches.</p>`);
};

module.exports = Print;