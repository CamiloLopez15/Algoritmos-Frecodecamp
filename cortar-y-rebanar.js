function frankenSplice(arr1, arr2, n) {
  let arrMezclado = [...arr2];
  arrMezclado.splice(n, 0, ...arr1);
  console.log(arrMezclado)
  return arrMezclado;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);