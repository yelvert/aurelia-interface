/* */ 
var arrayEach = require("../internal/arrayEach"),
    baseCallback = require("../internal/baseCallback"),
    baseCreate = require("../internal/baseCreate"),
    baseForOwn = require("../internal/baseForOwn"),
    isArray = require("../lang/isArray"),
    isObject = require("../lang/isObject"),
    isTypedArray = require("../lang/isTypedArray");
function transform(object, iteratee, accumulator, thisArg) {
  var isArr = isArray(object) || isTypedArray(object);
  iteratee = baseCallback(iteratee, thisArg, 4);
  if (accumulator == null) {
    if (isArr || isObject(object)) {
      var Ctor = object.constructor;
      if (isArr) {
        accumulator = isArray(object) ? new Ctor : [];
      } else {
        accumulator = baseCreate(typeof Ctor == 'function' && Ctor.prototype);
      }
    } else {
      accumulator = {};
    }
  }
  (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}
module.exports = transform;
