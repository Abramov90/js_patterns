function ObserverExample() {

	this.observerList = [];

	ObserverExample.prototype = {
		subscribe: function(fn) {
			this.observerList.push(fn);
		},

		unsubscribe: function(fn) {
			this.observerList.filter(function(item) {
				return item !== fn;
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