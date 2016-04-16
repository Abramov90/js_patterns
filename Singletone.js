var SingletoneExample = (function() {

	function Singletone(config) {

		var _config = config || {};

		this.name = 'SingletoneExample';
		this.firstProp = _config.firstProp || 'first';
		this.secondProp = _config.secondProp || 'second';
		this.thirdProp = _config.thirdProp || 'third';

	}

	var _instance = null;

	var _static = {
		name: 'SingletoneExample',

		getInstance: function(config) {
			_instance = _instance || new Singletone(config);
			return _instance;
		}
	};

	return _static;

})();