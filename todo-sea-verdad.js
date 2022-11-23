function truthCheck(collection, pre) {
  let verdaderos = 0;
  for (let i = 0; i < collection.length; i++){
    if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre]))
      verdaderos++
  }
  return verdaderos == collection.length;
}

truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number");