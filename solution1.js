function areEvenNumbers() {
    const evenNumbers = new Array(50);
    let index = 0;
  
    for (let i = 2; i <= 100; i += 2) {
      evenNumbers[index] = i;
      index++;
    }
  
    console.log(evenNumbers);
  }

  console.log(areEvenNumbers())