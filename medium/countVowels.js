/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Yoletur code here
    let vowels=['A','E','I','O','U','a','e','i','o','u']
    let string=str.split('');
    let ans=0
    string.forEach((ele)=>{
      if (vowels.includes(ele)){
        ans++;
      }
    })
  return ans
}

module.exports = countVowels;