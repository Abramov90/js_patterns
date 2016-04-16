var ModuleExample = (function() {

	var _privateCounter = 0;

	var _privateNumericStaticValue = 0;
	
	function _somePrivateMethod(prop) {
		console.log('You entered ' + prop);
	};

	return {

		somePublicValue: "value",

		getCount: function() {
			return _privateCounter;
		},

		somePublicMethod: function(prop) {
			_somePrivateMethod(prop);
		}
	};
	
})();