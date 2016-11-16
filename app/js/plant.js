// PlantFunction is the prototype of tree
let Plant = {
  height: 1,
  heightDelta: 0,
  getHeight() { return `My height is ${this.height}`;},
  increaseHeight(num) {
    this.height += num; //increase height of tree
  },
  decreaseHeight(num) {
    console.log("Starting height:", this.height);
    this.height -= num;  //decrease height of tree
  }
};

module.exports = Plant;

// The Plant prototype should have two methods on it: increaseHeight and decreaseHeight. Each method should accept an integer value as input.

// Plant.prototype.increaseHeight = function (growth) {

// }