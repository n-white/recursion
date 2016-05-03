// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  

	arrayFunc = function(item) {

  		return "[" + item.toString() + "]"
  		
	};
	
	objFunc = function(item) {
		var result = "{"
		for(key in item) {
			result += '"' + key.toString() + '"' + ":" + item[key].toString();
		};
		return result + "}";
	}
	
	stringFunc = function(item) {
		return '"' + item + '"';
	}
	
  	if(Array.isArray(obj)) {
	  	return arrayFunc(obj);
  	} else if (typeof obj == 'object') {
  		return objFunc(obj);
  	} else if (typeof obj == 'string') {
  		return strFunc(obj)
  	}
};