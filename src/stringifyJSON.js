// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  		if (obj.length === 1) {
  			return obj.shift().toString() + "]"
  		} else {
  			return obj.shift().toString() + "," + stringifyJSON(obj.slice(0))
  		};
  	

};
