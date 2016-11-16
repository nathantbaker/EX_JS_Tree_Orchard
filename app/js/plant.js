// PlantFunction is the prototype of tree
let Plant = {
  height: 1,
  getHeight() {
    return `My height is ${this.height}`;
  },
  increaseHeight(num) {
    console.log("Starting height:", this.height);
    this.height += num;
    console.log({
      "You increased the height by": num,
      "Your new height is": this.height
    });
  },
  decreaseHeight(num) {
    console.log("Starting height:", this.height);
    this.height -= num;
    console.log({
      "You decreased the height by": num,
      "Your new height is": this.height
    });
  }
};

// Testing
console.log("Plant object:", Plant);

module.exports = Plant;

// The Plant prototype should have two methods on it: increaseHeight and decreaseHeight. Each method should accept an integer value as input.

// Plant.prototype.increaseHeight = function (growth) {

// }