function sumFibs(num) {
  let result = [];
  let fibonacci = [];
  fibonacci[0] = 1;
  fibonacci[1] = 1;
  for (var i = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  result.push(fibonacci.filter(nums => !(nums % 2) == 0 && nums <= num))
  return result[0].reduce((acc, sgt) => acc + sgt);
}

sumFibs(1000);