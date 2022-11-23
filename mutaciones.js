function mutation(arr) {
  let elementArray0 = arr[0].toLowerCase();
  let elementArray1 = arr[1].toLowerCase();
  for(let i = 0 ; i < elementArray1.length; i++) {
    if (elementArray0.indexOf(elementArray1[i]) < 0) return false;
  }
  return true
}

mutation(["hello", "hey"]);