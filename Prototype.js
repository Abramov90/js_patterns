var PrototypeExample = (function() {
	function F() {};

	return function(proto) {
		F.prototype = proto;
		return new F();
	};

})();