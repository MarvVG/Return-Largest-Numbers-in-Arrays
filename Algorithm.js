function largestOfFour(arr) {
  console.log(arr[0])
  let result = [];
  let aux;
  for(let i = 0 ; i < arr.length;i++){
     aux = arr[i][0];
    for(let j = 0; j < arr[i].length;j++){
     if(aux < arr[i][j]){
       aux = arr[i][j];
     }   
    }
     result.push(aux); // Add the largest number of the sub-array used in the second loop.
  }
  console.log(result);
  return result; //Returns an array consisting of the largest number from each provided sub-array.
}
