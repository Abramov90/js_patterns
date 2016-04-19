var FacadeExample = (function() {

	var _privateScope = {
		someNumber: 0,

		getNumber: function() {
			console.log('Number value is ' + this.someNumber + '.');
			return this.someNumber;
		},

		setNumber: function(value) {
			value && this.someNumber = value;
		},

		doSomething: function() {
			console.log('Performe something.');
		},

		doSomethingElse: function() {
			console.log('Performe something else.');
		}
	};

	return {
		facade: function(args) {
			args.setNumber && _privateScope.setNumber(args.value);
			args.getNumber && _privateScope.getNumber();
			args.doSomething && _privateScope.doSomething();
			args.doSomethingElse && _privateScope.doSomethingElse();
		};
	}
} ());