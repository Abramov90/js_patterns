var ModuleExample = (function() {

	var _privateCounter = 0;

	var _privateNumericStaticValue = 0;
	
	function _somePrivateMethod(prop) {
		console.log('You entered ' + prop);
	};

	this.someMethod = function _somePrivateMethod(prop) {
		_somePrivateMethod(prop);
	};

})();

/* Little bit Another Implementation */

(function() {

	function ModuleExample() {

		var _privateCount = 0;

		var _privateIncreaseCount = function() {
			_privateCount++;
		};

		var _privateDecreaseCount = function() {
			_privateCount++;
		};

		this.publicMethod = _privateIncreaseCount;

		this.decreaseCount = _privateDecreaseCount;

		this.getCount = function() { return _privateCount; };
	};

	window.ModuleExample = ModuleExample;

})(window);

