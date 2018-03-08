'use strict'

export function anagram(word1: string, word2: string): boolean {
  return word1.split('').reverse().join('').toLowerCase() === word2
}


export function realAnagram(word1: string, word2: string): boolean {
  let word2LengthChecker: any[] = [];
  for (let j: number = 0; j < word1.length; j++) {
    for (let i: number = 0; i < word2.length; i++) {
      if (word1.charAt(j) === word2.charAt(i)) {
        word2LengthChecker.push(1)
      }
    }
  } if (word2LengthChecker.length >= word2.length) {
    return true;
  } else {
    return false;
  }
}
