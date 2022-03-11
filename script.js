'use strict';

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let newNum = Math.min(...args);
    console.log(newNum); // just checking
    return newNum;
  }
}
