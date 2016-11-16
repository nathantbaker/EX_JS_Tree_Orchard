'use strict';
// Use Strict is added dynamically to other js modules using npm module 'strict-loader'

// Requires
require("../css/style.css");
require("strict!./view.js");
let Tree = require("strict!./tree.js");

// Testing increasing
console.log("Tree object:", Tree);
Tree.increaseHeight(5);
console.log("Tree object after increase:", Tree);

// Testing decreasing
console.log("Tree object:", Tree);
Tree.decreaseHeight(9);
console.log("Tree object after increase:", Tree);