// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  // console.log(maxOfTwoNumbers(3, 9));
  
  // 2.
  const maxOfThree = function(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
      return num1;
    } else if (num2 >= num1 && num2 >= num3) {
      return num2;
    } else {
      return num3;
    }
  };
  // console.log(maxOfThree(1, 2, 3));
  // console.log(maxOfThree(5, 2, 3));
  
  // 3.
  function isCharAVowel(char) {
    // if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'y') {
    //   return true;
    // } else {
    //   return false;
    // }
    // // Another method below
    // return 'aeiouy'.includes(char) ? true : false;
    // Another method below
    return 'aeiouy'.includes(char);
  }
  // console.log(isCharAVowel('a'));
  // console.log(isCharAVowel('b'));
  
  // 4.
  const sumArray = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  
    // return arr.reduce(function(acc, ele) { return acc += ele; });
  };
  // console.log(sumArray([2, 4, 5]));
  // console.log(sumArray([10, 40, 50]));
  
  // 5.
  
  function multiplyArray(arr) {
    let total = 1;
    arr.forEach(function(num) {
      total *= num;
    });
    return total;
  }
  // console.log(multiplyArray([2, 4, 5]));
  // console.log(multiplyArray([10, 40, 50]));
  
  // 6.
  const numArgs = function() {
    return arguments.length;
  };
  // console.log(numArgs(1,2,3,4))
  
  // 7.
  function reverseString(str) {
    let letters = str.split('');
    let origLength = letters.length;
    let popLetters = [];
    for (let i = 0; i < origLength; i++) {
      popLetters.push(letters.pop());
    }
    let result = '';
    for (i = 0; i < popLetters.length; i++) {
      result += popLetters[i];
    }
    return result;
  }
  // console.log(reverseString('hithere'));
  
  // 8.
  const longestStringInArray = function(arr) {
    let strLengths = [];
    arr.forEach(function(str) {
      strLengths.push(str.length);
    });
    let longest = 0;
    for (let val of strLengths) {
      if (val > longest) {
        longest = val;
      }
    }
    return longest;
  }
  
  // console.log(longestStringInArray(['fds','qwert','1234']));
  
  // 9.
  function stringsLongerThan(arr, num) {
    let strLengths = [];
    arr.forEach(function(str) {
      strLengths.push(str.length);
    });
    let longStrings = [];
    for (let i = 0; i < strLengths.length; i++) {
      if (strLengths[i] > num) {
        longStrings.push(arr[i]);
      }
    }
    return longStrings;
  }
  
  // console.log(stringsLongerThan(['fds','qwert','1234'], 3));