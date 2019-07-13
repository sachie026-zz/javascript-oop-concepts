var Counter = function() {
  var counter = 1;
  function increment() {
    counter++;
  }
  function getCounter() {
    return counter;
  }

  return {
    incr: increment,
    getCr: getCounter
  };
};

var obj1 = Counter();
obj1.incr();
obj1.incr();
obj1.incr();
console.log(obj1.getCr());
