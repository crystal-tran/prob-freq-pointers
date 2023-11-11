"use strict";
// add whatever parameters you deem necessary & write docstring
/**This function takes in two arrays of possibly different lengths
 * First array contains keys. Second array contains values
 * Return an object created from the keys and values
 * If there are not enough keys, ignore the rest of values
 * If there are not enough values, the rest of the keys have a value of null
 */
function twoArrayObject(arr1, arr2) {
  let result = {};

  for(let i=0; i < arr1.length; i++){
    const value = arr2[i] || null;
    result[arr1[i]] = value;
  }
  return result;
}
