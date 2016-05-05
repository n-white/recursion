// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for(var i = 0; i < collection.length; i ++) {
        iterator(collection[i], i, collection);
      };
    } else {  
      for(var key in collection) {
        iterator(collection[key], key, collection);
      };
    };
};

map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    var newArray = [];
    each(collection, function(item) {
      newArray.push(iterator(item));
    });
    return newArray;
  };


var stringifyJSON = function(obj) {
	if(obj == 'functions' || obj == 'function') {
		return 'null';
	}
	if(obj == undefined || obj == 'undefined') {
		return 'null';
	}
	if(typeof obj == 'string') {
		return '"' + obj + '"';
	}
	if(typeof obj == 'boolean') {
		return obj.toString();
	}
	if(typeof obj == 'number') {
		return obj.toString();
	}
	if(Array.isArray(obj)) {
		return "[" + map(obj, function(item) {return stringifyJSON(item)} ).join(",") + "]"
	}
	if(typeof obj == 'object') {
		var result = []
		each(obj, function(value, key) {
			if(stringifyJSON(key) == 'null') {
				return;
			} else {
				return result.push(stringifyJSON(key) + ":" + stringifyJSON(value))
			}
		});
		return "{" + result.join(",") + "}";
	}
	
}