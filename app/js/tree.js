let Plant = require("strict!./plant.js");

// Create a tree based on the Plant prototype
let Tree = Object.create(Plant);
Tree.branches = 30; // create branches key on Tree
Tree.height = 12;

Tree.grow = function(num) {
  this.height += num; //increase height of tree based on argument

};

Tree.trim = function(num) {
  this.height -= num; //decrease height of tree based on argument

};

// Testing I can call things from Plant
let plantExample = Plant.getHeight();
console.log("plantExample:", plantExample);

module.exports = Tree;