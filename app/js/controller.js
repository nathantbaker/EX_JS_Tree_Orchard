'use strict'; // Use Strict is added dynamically to other js modules using npm module 'strict-loader'

// Requires
require("../css/style.css");
let Print = require("strict!./view.js"),
    Tree = require("strict!./tree.js"),
    intervalID = window.setInterval(grow, 1000),
    growCounter = 0;

//Show initail values
Print(Tree.PearTree, Tree.OakTree);

function grow() {

  Tree.PearTree.grow(5);      // grow pear tree by some number
  Tree.OakTree.grow(10);    //  grow oak tree by 4
  Print(Tree.PearTree, Tree.OakTree);    //   print new values

  growCounter++;
  if (growCounter >= 30) { window.clearInterval(intervalID);}
}
