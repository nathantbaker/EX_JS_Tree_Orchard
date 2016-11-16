let Plant = require("strict!./plant.js");

// Create a tree based on the Plant prototype
let Tree = Object.create(Plant);
Tree.branches = null; // create branches key on Tree
Tree.height = 12;

// Testing I can call things from Plant
let plantExample = Plant.getHeight();
console.log("plantExample:", plantExample);

module.exports = Tree;