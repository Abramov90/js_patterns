var MixinExample = {

  MixinExample.prototype = {
    firstAction: function() {
      console.log('do something one');
    },

    secondAction: function() {
      console.log('do something two');
    },

    thirdAction: function() {
      console.log('do something three');
    }
  };

  function extend(recivingClass, givingClass) {
    if (arguments.length > 2) {
      var extentions = arguments.slice(1);
      extentions.forEach(function(item) {
        recivingClass.prototype[item] = givingClass.prototype[item];

      });
    } else {
      Object.keys(givingClass).forEach(function(method) {
        if (!Object.hasOwnProperty.call(recivingClass.prototype, method)) {
          recivingClass.prototype[method] = givingClass.prototype[method];
        }
      });

    }
  }


};
