let Plant = require("strict!./plant.js");

// Create a tree based on the Plant prototype
let Tree = Object.create(Plant);
Tree.branches = 30; // create branches key on Tree
Tree.height = 12;

Tree.grow = function(num) {
  this.height += num; //increase height of tree based on argument
  this.heightDelta += num; //track change in height
  console.log({
    "You increased the height by": num,
    "Your new height is": this.height,
    "Your change in height is": this.heightDelta
  });
};

Tree.trim = function(num) {
  this.height -= num; //decrease height of tree based on argument
  this.heightDelta -= num;  //track change in height
  this.branches--;// decrease number of branches by 1
  console.log({
    "You decreased the height by": num,
    "Your new height is": this.height,
    "Your change in height is": this.heightDelta
  });
};

module.exports = Tree;