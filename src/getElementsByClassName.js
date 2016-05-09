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

    var found = false;
    for(var i = 0; i < element.classList.length; i++) {
      if(element.classList[i] == className) {
        found = true;
      };
    };
    if(found == true) {
      elementList.push(element.classList)  
    }
    
    


  }
  helperFunction(document.body);
  return elementList;



};


