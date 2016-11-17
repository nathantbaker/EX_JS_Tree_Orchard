'use strict';
// Use Strict is added dynamically to other js modules using npm module 'strict-loader'

// Requires
require("../css/style.css");
require("strict!./view.js");
let Tree = require("strict!./tree.js");

// Testing grow Tree
Tree.PearTree.grow(5);
Tree.PearTree.grow(12);
Tree.OakTree.grow(24);