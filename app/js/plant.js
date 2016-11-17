// PlantFunction is the prototype of tree
let Plant = {
  height: 0,
  name: null,
  heightDelta: 0, // tracks change in height
  getHeight() { return `My height is ${this.height}`;},
  increaseHeight(num) {
    this.height += num; //increase height of tree
  },
  decreaseHeight(num) {
    this.height -= num;  //decrease height of tree
  }
};

module.exports = Plant;