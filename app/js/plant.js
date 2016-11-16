// PlantFunction is the prototype of tree
let PlantFunction = {
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

module.exports = PlantFunction;

// The Plant prototype should have two methods on it: increaseHeight and decreaseHeight. Each method should accept an integer value as input.

// Plant.prototype.increaseHeight = function (growth) {

// }