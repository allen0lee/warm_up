const weightOfLetters = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }
  
  const getLetterWeight = (letter) => {
    return weightOfLetters[letter]
  }
  
  
  const FindBalancePoint = (word) => {
    // convert word into array of weights
    let arrayOfWeights = word.toLowerCase().split('').map(letter => {
      return getLetterWeight(letter)
    })
  
    // console.log(`Converted '${word}'' into weights: [${arrayOfWeights}]`)
    // console.log(`Find position (balance point)`)
    
    // position starts at left and slides through each index position
    for (position = 1; position < (arrayOfWeights.length - 1); position++) {
  
      // console.log(`Slide position to index ${position} (${arrayOfWeights[position]})`)
      let leftSideWeights = 0;
      let rightSideWeights = 0;
  
      // Calculate weight of all elements to left of position
      for (leftSide = 0; leftSide < position; leftSide++) {
        // console.log(`Calculating weight of ${arrayOfWeights[leftSide]} * ${position - leftSide}`)
        leftSideWeights += arrayOfWeights[leftSide] * (position - leftSide);
      }
  
      // Calculate weight of all elements to right of position
      for (rightSide = arrayOfWeights.length -1; rightSide > position; rightSide--) {
        // console.log(`Calculating weight of ${arrayOfWeights[rightSide]} * ${rightSide - position}`)
        rightSideWeights += arrayOfWeights[rightSide] * (rightSide - position);
      }
  
      // console.log(`Weight on left: ${leftSideWeights}`)
      // console.log(`Weight on right: ${rightSideWeights}`)
  
      // Check for match
      if (leftSideWeights == rightSideWeights) {
        return (`Match Found! Midpoint is: ${word[position]}`)
      }
    }
  }
  
  console.log(FindBalancePoint('CONSUBSTANTIATION'))