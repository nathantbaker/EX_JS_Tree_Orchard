'use strict'; // Use Strict is added dynamically to other js modules using npm module 'strict-loader'

// Requires
require("../css/style.css");
let Print = require("strict!./view.js");
let Tree = require("strict!./tree.js");

// Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.

// Testing Tree Names
let intervalID = window.setInterval(grow, 1000);
let counter = 0;

//Show initail values
Print(Tree.PearTree);
Print(Tree.OakTree);

function grow() {

  Tree.PearTree.grow(5);      // grow pear tree by some number
  console.log("Tree.PearTree.height:", Tree.PearTree.height);
  Tree.OakTree.grow(10);    //  grow oak tree by 4
  Print(Tree.PearTree);    //   print new values
  Print(Tree.OakTree);

  counter++;
  if (counter >= 5) { window.clearInterval(intervalID);}
}
