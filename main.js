                    //    1

// function zeroend(nums) {
//     const nonZeroNums = nums.filter(num => num !== 0);
//     const zeroCount = nums.length - nonZeroNums.length;
  
//     return [...nonZeroNums, ...Array(zeroCount).fill(0)];
//   }
//   const nums = [0, 1, 0, 3, 12];
//   const result = zeroend(nums);
//   console.log(result); 
  

                    //  2
// function short(inputString) {
//     const wordsArray = inputString.split(' ');
//     return wordsArray.reduce((shortestLength, word) => Math.min(shortestLength, word.length), Infinity);
//   }
//  const inputString = "This is a test string with different word lengths";
//   const result = short(inputString);
//   console.log(result); 
  

                    // 3
// function century(year) {
//     return Math.ceil(year / 100);
//   }
//   const year1 = 1905;
//   const year2 = 2000;
//   const year3 = 800;
//   const year4 = 1539;
  
//   console.log(century(year1)); 
//   console.log(century(year2)); 
//   console.log(century(year3));
//   console.log(century(year4));
  

                 // 4
// function vowels(str) {
//     const vowels = str.match(/[aeiou]/gi);
//     return vowels ? vowels.length : 0;
//   }
//   const inputString = "this is a message hello world";
//   console.log(vowels(inputString)); 
  


                    // 5
// function firstNonRepeatedletter(inputString) {
//     const lowerCaseString = inputString.toLowerCase();
  
//     for (const char of lowerCaseString) {
//       if (lowerCaseString.indexOf(char) === lowerCaseString.lastIndexOf(char)) {
//         return char;
//       }
//     }
  
//     return null;
//   }
  

//   const inputString = "Stress";
//   console.log(firstNonRepeatedletter(inputString)); 
  