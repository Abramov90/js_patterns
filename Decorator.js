var Unit = function(name) {
  this.name = name;

  this.publicMethod = function() {
    console.log('The name of unit is ' + this.name);
  }

};

var DecoratedUnit = function(unit, valueOne, valueTwo) {

  this.unit = unit;
  this.name = unit.name;
  this.valueOne = valueOne;
  this.valueTwo = valueTwo;

  this.publicMethod = function() {
    console.log('The name of decorated unit is ' + this.name);
  }
};
