// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  // your code here

  var elementList = [];
  function helperFunction(element) {

    //Setup helper function to recursively traverse the DOM and collect each element that contains the className

    //Part 1: Code to run through each element of the childNodes and push to the elementList if the element contains the className

    if(contains(element.classList, className)) {
      elementList.push(element)
    }

    //Part 2: Add code to run through the childNodes and run the helperFunction on each childNode
   
    for(var i = 0; i < element.childNodes.length; i++) {
      helperFunction(element.childNodes[i])
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

