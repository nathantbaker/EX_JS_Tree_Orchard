let Plant = require("strict!./plant.js");

// Create a tree based on the Plant prototype
let Tree = Object.create(Plant);
Tree.branches = 30; // create branches key on Tree
Tree.height = 12;

Tree.grow = function(num) {
  this.height += num;       // increase height of tree based on argument
  this.heightDelta += num; //  track change in height


  while (this.heightDelta >= 10) {  // Each time change in height is 10 or higher,
    Tree.branches++;               //  add 1 branch,
    this.heightDelta -= 10;       //   and subtract 10 from heightDelta.
  }

  console.log({
    "You increased the height by": num,
    "Your new height is": this.height,
    "Your change in height is": this.heightDelta,
    "Your number of branches is": this.branches

  });
};

Tree.trim = function(num) {
  this.height -= num;       // decrease height of tree based on argument
  this.heightDelta -= num; //  track change in height
  this.branches--;        //   decrease number of branches by 1

  console.log({
    "You decreased the height by": num,
    "Your new height is": this.height,
    "Your change in height is": this.heightDelta,
    "Your number of branches is": this.branches
  });
};

// Create Pear and Oak trees using the tree prototype
let PearTree = Object.create(Tree),
    OakTree = Object.create(Tree);

module.exports = {PearTree, OakTree};