function solve(arr) {
    days = 0;
    return sortAndSum(arr)
  }
  function sortAndSum(arr){
    arr.sort(function(a, b){return b-a});
    if (arr[1] !== 0) {
      arr[0] -= 1;
      arr[1] -= 1;
      days++
      theSum = arrSum(arr)
      if (theSum > 1) sortAndSum(arr);
    }
    return days;
  };
  const arrSum = arr => arr.reduce((a,b) => a + b, 0)
  console.log(solve([1,2,1]))
  console.log(solve([8,2,8]))
  console.log(solve([1234500,235623,9432]))
