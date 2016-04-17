function ObserverExample() {

	this.observerList = [];

	ObserverExample.prototype = {
		subscribe: function(fn) {
			this.observerList.push(fn);
		},

		unsubscribe: function(fn) {
			this.observerList = this.observerList.filter(function(observer) {
				return observer !== fn;
			});
		},

		trigger: function(event, context) {
			context = context || window;
			this.observerList.forEach(function(observer) {
				observer.call(context, event);
			});
		}
	};
}