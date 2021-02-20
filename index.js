const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, callBack) {
      let copy = Object.assign({},obj);
      let result = Object.values(copy).forEach(element => callBack(element))
      return obj;
    },

    map: function(obj, callBack) {
      let object = Object.assign({},obj);
      let result = Object.values(object).map(callBack)
      return result;
    },

    reduce: function(arr, callback, base=0) {
      let resultArr = arr.slice();
      let result = resultArr.reduce(callback, base)
      return result;
    },

    functions: function(obj) {
      let keys = Object.keys(obj)
      let functions = keys.filter(element => typeof obj[element] === 'function')
      return functions.sort();
    },

    find: function(obj, callBack) {
      let result = obj.find(callBack)
      return result;
    },

    filter: function(obj, callBack) {
      let result = obj.filter(callBack)
      return result;
    },

    size: function(obj) {
      return Object.keys(obj).length;
    },

    first: function(obj, slicer=1) {
      if(slicer > 1) return obj.slice(0,slicer);
      return obj[0]
    },

    last: function(obj, slicer=0) {
      if(slicer > 0 ) return obj.slice(obj.length - slicer );
      return obj[obj.length -1]
    },

    compact: function(arr) {
      return arr.filter(Boolean)
    },

    sortBy: function(arr, callBack) {
      let copy = arr.slice()
      copy.sort(function(a, b){return a-b});
      return copy
    },

    flatten: function(arr, level=false) {
      if(level){return arr.flat(1)}
      return arr.flat(5);
    },

    uniq: function(array, isSorted=false, callBack=false) {
      let unique = [...new Set(array)];
      if (isSorted) {
        unique.sort(function(a, b){return a-b});
      }
      if (callBack) {
        unique = unique.filter(element => callBack(element))
      }
      return unique;
    },

    keys: function(obj) {
      return Object.keys(obj)
    },

    values: function(obj) {
      return Object.values(obj)
    }

   
    

  }
})()


    console.log(fi.functions(fi))

    const testObject = {
      a: "",
      z: () => null,
      p: "",
      c: () => null,
      k: () => null,
    }

    const final = ["c", "k", "z"]
    console.log(fi.functions(testObject))