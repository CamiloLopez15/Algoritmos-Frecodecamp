function diffArray(arr1, arr2) {
  const newArr = [];
  for(let i = 0; i < arr1.length; i++){
    if(arr2.includes(arr1[i]) === true) {
      console.log("Si está:" + arr1[i])
    }
    else {
      console.log("No está:" + arr1[i]);
      newArr.push(arr1[i]);
    }
  }
  for(let i = 0; i < arr2.length; i++){
    if(arr1.includes(arr2[i]) === true) {
      console.log("Si está:" + arr2[i])
    }
    else {
      console.log("No está:" + arr2[i]);
      newArr.push(arr2[i]);
    }
  }
  console.log(newArr)
  return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);