function rot13(str) {
  let arr = str.split("");
  for(let index in arr) {
    switch (arr[index]) {
      case "A": arr[index] = "N";
      break;
      case "B": arr[index] = "O";
      break;
      case "C": arr[index] = "P";
      break;
      case "D": arr[index] = "Q";
      break;
      case "E": arr[index] = "R";
      break;
      case "F": arr[index] = "S";
      break;
      case "G": arr[index] = "T";
      break;
      case "H": arr[index] = "U";
      break;
      case "I": arr[index] = "V";
      break;
      case "J": arr[index] = "W";
      break;
      case "K": arr[index] = "X";
      break;
      case "L": arr[index] = "Y";
      break;
      case "M": arr[index] = "Z";
      break;
      case "N": arr[index] = "A";
      break;
      case "O": arr[index] = "B";
      break;
      case "P": arr[index] = "C";
      break;
      case "Q": arr[index] = "D";
      break;
      case "R": arr[index] = "E";
      break;
      case "S": arr[index] = "F";
      break;
      case "T": arr[index] = "G";
      break;
      case "U": arr[index] = "H";
      break;
      case "V": arr[index] = "I";
      break;
      case "W": arr[index] = "J";
      break;
      case "X": arr[index] = "K";
      break;
      case "Y": arr[index] = "L";
      break;
      case "Z": arr[index] = "M";
      break;
    }
  }
  console.log(arr.join(""))
  return arr.join("");
}

rot13("SERR PBQR PNZC");