function sort(str) {
  let array = str.split("");
  array = array.sort();
  let sortedStr = array.join("");
  return sortedStr;
}

function isAnagram(str1, str2) {
  let strA = str1.toLowerCase();
  let strB = str2.toLowerCase();
  
  return sort(strA) === sort(strB);
}

module.exports = isAnagram;
