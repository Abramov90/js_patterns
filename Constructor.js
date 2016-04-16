function ExampleConstructor(valueOne, valueTwo, valueThree) {

	this.valueOne = valueOne;
	this.valueTwo = valueTwo;
	this.valueThree = valueThree;

	ExampleConstructor.prototype.toString = function() {
		return 'The first value is ' + this.valueTwo + ', the second value is ' + this.valueOne +
			', and the third value is ' + this.valueThree;
	};

};