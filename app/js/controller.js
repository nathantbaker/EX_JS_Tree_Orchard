'use strict';
// Use Strict is added dynamically to other js modules using npm module 'strict-loader'

// Requires
require("../css/style.css");
require("strict!./view.js");
let Tree = require("strict!./tree.js");

// Testing grow Tree
console.log("Tree object:", Tree);
Tree.grow(5);
console.log("Tree object after grow:", Tree);

// Testing trim Tree
console.log("Tree object:", Tree);
Tree.trim(9);
console.log("Tree object after trim:", Tree);