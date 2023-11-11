"use strict";
// add whatever parameters you deem necessary & write docstring
/**Given 2 positive integers, return a true if they have the same frequency
 * otherwise return false
 */
function sameFrequency(num1, num2) {

  let num1Frequency = getFrequency(num1);
}

function getFrequency(num){
  let numString = num.toString();
  let numToFrequency = {};
  for (let digit of numString) {
    const count = (numToFrequency[digit] || 0) + 1;
    numToFrequency[digit] = count;
    }
return numToFrequency
}