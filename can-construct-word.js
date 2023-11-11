'use strict';
// add whatever parameters you deem necessary & write doc comment
//"aabc"  "bbaac"

/**
 *
 * what does this do?
 * canConstructWord accepts a word and letters as its parameters. It should
 * return true if the word can be built with the letters; otherwise,
 *  it should return false.
 */


function canConstructWord(word, letters) {
  if (letters.length === 0) {
    return false;
  }

  let word1Freq = getFrequency(word);
  let lettersFreq = getFrequency(letters); // change these to const. line 9 too
  console.log("word1Freq", word, word1Freq);
  console.log("lettersFreq", letters, lettersFreq);
  for (let key in word1Freq) {
    if (lettersFreq[key] === undefined) {
      return false;
    } else {
      if (word1Freq[key] > lettersFreq[key]) {
        return false;
      }
    }
  }
  return true;
}



function getFrequency(word) {
  let letterCount = {};

  for (let letter of word) {
    const count = (letterCount[letter] || 0) + 1;
    letterCount[letter] = count;
  }

  return letterCount;
}