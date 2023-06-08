var arr = [1, 5, 30, 56, 3, 48, 67, 44, 7, 32,];
function highestAndAverage() {
    let highest = arr[0];
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > highest) {
        highest = arr[i];
      }
      sum += arr[i];
    }
  
    const average = sum / arr.length;
  
    console.log("Highest number:", highest);
    console.log("Average:", average);
  }

  console.log(highestAndAverage())