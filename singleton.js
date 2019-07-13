var SingletonFactory = (function() {
  var instance;
  function Singleton() {}
  return {
    getInstance: function() {
      if (!instance) {
        instance = new Singleton();
        instance.constructor = null;
      }
      return instance;
    }
  };
})();

var test1 = SingletonFactory.getInstance();
var test2 = SingletonFactory.getInstance();

console.log(test1);
console.log(test2);
console.log(test1 == test2);
