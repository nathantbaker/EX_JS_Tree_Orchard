require('jquery');

let container = $("#container");

let Print = function(Pear, Oak) {
  container.append(`
    ${Pear.name} is now ${Pear.height}cm tall and has ${Pear.branches} branches.<br>
    ${Oak.name} is now ${Oak.height}cm tall and has ${Oak.branches} branches.<br>
    <br>
    `);
};

module.exports = Print;