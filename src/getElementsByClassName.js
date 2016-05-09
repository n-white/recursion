// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  // your code here

  var elementList = [];
  function helperFunction(element) {

    //Setup helper function to call traverse the DOM and collect each element with className
    //Helper function will call itself recursively

    if(contains(element.classList, className)) {
      elementList.push(element.classList)
    }
        
  }
  helperFunction(document.body);
  return elementList;
};



contains = function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

