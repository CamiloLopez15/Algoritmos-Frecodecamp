function getIndexToIns(arr, num) {
  let sortArray = arr.sort((a,b) => a-b);
  let indexNumArray = sortArray.findIndex(element => element >= num); 
  
  if(indexNumArray == -1){
    console.log(indexNumArray + (arr.length + 1));
    return indexNumArray + (arr.length + 1);
  }
  console.log(indexNumArray)
  return indexNumArray;
}

getIndexToIns([10, 20, 30, 40, 50], 30);