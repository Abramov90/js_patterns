var PrototypeExaple = function() {

	function _somePrivateMethod() {
		console.log(' do something');
	};

	function _anotherPrivateFunction() {
		console.log('do something another');
	};

	this.publicFunction = function() {
		_somePrivateMethod();
		_anotherPrivateMethod();
	};

};

function prototypeInstance() {
	this.name = 'instance';

	prototypeInstance,prototype = new PrototypeExaple();
};