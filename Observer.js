function ObserverListExample() {

	this.observerList = [];

	ObserverListExample.prototype = {
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
};

function Subject() {

	this.observers = new ObserverListExample();

	Subject.prototype = {
		addObserver: function(observer) {
			this.observers.subscribe(observer);
		},

		removeObserver: function(observer) {
			this.observers.unsubscribe(observer);
		},

		notify: function(value) {
			this.observers.forEach(function(observer) {
				observer.update(value);
			});
		}
	};
};

function ObserverInstanceExample() {

	this.update = function(value) {
		console.log(value);
	};
}