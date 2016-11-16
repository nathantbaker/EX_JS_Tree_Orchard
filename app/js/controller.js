'use strict';
// Use Strict is added dynamically to other js modules using npm module 'strict-loader'

// Requires
require("../css/style.css");
require("strict!./view.js");
let Tree = require("strict!./tree.js");

// Testing I can call things from Tree
let treeExample = Tree.testFunction();
console.log("treeExample:", treeExample);
console.log("tree:", Tree);