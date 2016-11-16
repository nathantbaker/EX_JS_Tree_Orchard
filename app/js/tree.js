let Plant = require("strict!./plant.js");

// Create a tree based on the Plant prototype
var Tree = Object.create(Plant);
Tree.a = 3;

// Testing I can call things from Plant
let plantExample = Plant.testFunction();
console.log("plantExample:", plantExample);

module.exports = Tree;