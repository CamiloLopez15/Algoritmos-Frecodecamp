function palindrome(str) {
  let regExp = /[a-z0-9]/ig;
  let newStr = str.match(regExp);
  console.log(newStr)
  if(newStr.join("").toLowerCase() === newStr.reverse().join("").toLowerCase()){
    return true
  }
  else return false;
}

palindrome("0_0 (: /-\ :) 0-0");