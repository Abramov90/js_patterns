var ModuleExample = (function() {

	var _privateCounter = 0;

	var _privateNumericStaticValue = 0;

	var _config = {
		firstProp: 'one',
		secondProp: 'two'
	};

	function _inscreaseCounter() {
		_privateCounter++;
	};

	function _decreaseCounter() {
		_privateCounter--;
	};

	function _publicGetCount() {
		return _privateCounter;
	};

	function _privateUpdateConfig(prop) {
		_config[prop.name] = prop.value;
	};

	function _publicGetPrivateValue() {
		return _privateNumericStaticValue;
	};

	return {
		getHighter: _inscreaseCounter,
		getLower: _decreaseCounter,
		getCount: _publicGetCount,
		getValue: _publicGetPrivateValue,
		updateConfig: _privateUpdateConfig
	};
	
})();