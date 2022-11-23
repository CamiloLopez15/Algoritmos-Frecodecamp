function telephoneCheck(str) {
  let expRegLetras = /[a-z]/i;
  let expRegParentesis = /\(\d(\s||-){2}\)/;
  let expReg1 = /^1( || \()\d(\s||-||\()/;
  let expReg2 = /^((\d(||-)){10})$/;
  let expReg3 = /^\((\d{3})\)\d{3}-(\d{4})$/;
  let expReg4 = /^1( ||)\((\d{3})\)\d{3}-(\d{4})$/;

  console.log(expReg4.test(str))

  let expRegNum = /^1\d(\s||||-||\()/;
  if(expRegLetras.test(str) || expRegNum.test(str) || !str.includes("(") && str.includes(")")) {
    console.log("false");
    return false
  }
  else if (expRegParentesis.test(str) && expReg1.test(str) || expReg1.test(str) || expReg2.test(str) || expReg3.test(str) || expReg4.test(str)){
    console.log("true");
    return true
  }
  return false
}

telephoneCheck("1 (555)555-5555");