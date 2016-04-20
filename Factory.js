var abstractFactoryExample = (function() {
	var types = {};

	return {
		getType: function(type, cusotmization) {
			var Instance = types[type];

			return (Instance ? new Instance(cusotmization) : null);
		},

		registerNewType: function() {
			var proto = Instance.prototype;
			if (proto.someMethod && proto.anotherMethod) {
				types[type] = Instance;
			}

			return abstractFactoryExample;
		}
	}

})();