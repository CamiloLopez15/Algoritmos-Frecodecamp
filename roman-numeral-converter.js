function convertToRoman(num) {
  let numeroRomano = "";
  if(1000 <= num) {
    let division = Math.floor(num / 1000);
    if (division > 3) division = 3;
    for(let i = 0; i < division; i++) {
      num -= 1000;
      numeroRomano += "M";
    }
  }
  if(900 <= num) {
    let division = Math.floor(num / 900);
    if (division > 3) division = 3;
    for(let i = 0; i < division; i++) {
      num -= 900;
      numeroRomano += "CM";
    }
  }
  if(500 <= num) {
    let division = Math.floor(num / 500);
    console.log(division);
    if (division > 3) division = 3;
    for(let i = 0; i < division; i++) {
      num -= 500;
      numeroRomano += "D";
    }
  }
  if(400 <= num) {
    let division = Math.floor(num / 400);
    console.log(division);
    if (division > 3) division = 3;
    for(let i = 0; i < division; i++) {
      num -= 400;
      numeroRomano += "CD";
    }
  }
  if(100 <= num) {
    let division = Math.floor(num / 100);
    console.log(division);
    if (division > 3) division = 3;
    for(let i = 0; i < division; i++) {
      num -= 100;
      numeroRomano += "C";
    }
  }
  if(90 <= num) {
    let division = Math.floor(num / 90);
    console.log(division);
    if (division > 3) division = 3;
    for(let i = 0; i < division; i++) {
      num -= 90;
      numeroRomano += "XC";
    }
  }
  if(50 <= num) {
    let division = Math.floor(num / 50);
    console.log(division);
    if (division > 3) division = 3;
    for(let i = 0; i < division; i++) {
      num -= 50;
      numeroRomano += "L";
    }
  }
  if(40 <= num) {
    let division = Math.floor(num / 40);
    console.log(division);
    if (division > 3) division = 3;
    for(let i = 0; i < division; i++) {
      num -= 40;
      numeroRomano += "XL";
    }
  }
  if(10 <= num) {
    let division = Math.floor(num / 10);
    console.log(division);
    if (division > 3) division = 3;
    for(let i = 0; i < division; i++) {
      num -= 10;
      numeroRomano += "X";
    }
  }
  if(9 <= num) {
    let division = Math.floor(num / 9);
    console.log(division);
    if (division > 3) division = 3;
    for(let i = 0; i < division; i++) {
      num -= 9;
      numeroRomano += "IX";
    }
  }
  if(5 <= num) {
    let division = Math.floor(num / 5);
    console.log(division);
    if (division > 3) division = 3;
    for(let i = 0; i < division; i++) {
      num -= 5;
      numeroRomano += "V";
    }
  }
  if(4 <= num) {
    let division = Math.floor(num / 4);
    console.log(division);
    if (division > 3) division = 3;
    for(let i = 0; i < division; i++) {
      num -= 4;
      numeroRomano += "IV";
    }
  }
  if(1 <= num) {
    let division = Math.floor(num / 1);
    console.log(division);
    if (division > 3) division = 1;
    for(let i = 0; i < division; i++) {
      num -= 1;
      numeroRomano += "I";
    }
  }
  console.log(numeroRomano)
  return numeroRomano;
}

convertToRoman(3853);