var Mediator = function() {
	this.modules = {};

	Mediator.prototype = {
		subscribe: function(module, callback) {
			this.modules[module] = this.modules[module] || [];
			this.modules[module].push(callback);
		},

		unsubscribe: function(module, callback) {
			this.modules[module] = this.modules[module].filter(function(handler) {
				return handler !== callback;
			});
		},

		publish: function(module, data) {
			var module = this.modules[module];
			if (module) {
				module.forEach(function(handler) {
					handler.apply(undefined, data);
				});
			}
		}
	};
};