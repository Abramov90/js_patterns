(function() {
	var CommandExpample = {

		firstMethod: function(prop, value) {
			return 'Do with ' + prop + 'something and use ' + value '!' ;
		},

		secondMethod: function(prop, value) {
			return 'Do with ' + prop + 'something another and use ' + value '!!' ;
		},

		thirdMethod: function(prop, value) {
			return 'Do with ' + prop + 'something realy another and use ' + value '!!!' ;
		},

		execute: function(name) {
			return CommandExpample[name] && CommandExpample[name].apply(CommandExpample, [].slice.call(arguments, 1));
		}
	};
	
})();