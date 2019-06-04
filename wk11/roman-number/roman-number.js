const convertNumToRoman = (num) => {
                 // round down                               // 2311
  let thousands = Math.floor(num/1000) * 1000                 // 2000
  let hundreds = Math.floor((num - thousands)/100) * 100      //  300
  let tens = Math.floor((num - thousands - hundreds)/10) * 10 //   10
  let ones = num - thousands - hundreds - tens               //    1

  let romanThousands = ""
  let romanHundreds = ""
  let romanTens = ""
  let romanOnes = ""

  if(thousands < 3000) {
    if(thousands == 2000) {
      romanThousands = "MM"
    } else if(thousands == 1000) {
      romanThousands = "M"
    }
  }    

  if(hundreds == 900) {
    romanHundreds = "CM"
  } else if(hundreds > 500 && hundreds < 900) {
    romanHundreds = "D"
    for(let i = 0; i < (hundreds - 500)/100; i++) {
      romanHundreds = romanHundreds + "C"
    }
  } else if(hundreds == 500) {
    romanHundreds = "D"
  } else if(hundreds == 400) {
    romanHundreds = "CD"
  } else if(hundreds > 100 && hundreds < 400) {
    romanHundreds = "C"
    for(let i = 0; i < (hundreds - 100)/100; i++) {
      romanHundreds = romanHundreds + "C"
    }
  } else if(hundreds == 100) {
    romanHundreds = "C"
  } 

  if(tens == 90) {
    romanTens = "XC"
  } else if(tens > 50 && tens < 90) {
    romanTens = "L"
    for(let i = 0; i < (tens - 50)/10; i++) {
      romanTens = romanTens + "X"
    }
  } else if(tens == 50) {
    romanTens = "L"
  } else if(tens == 40) {
    romanTens = "XL"
  } else if(tens > 10 && tens < 40) {
    romanTens = "X"
    for(let i = 0; i < (tens - 10)/10; i++) {
      romanTens = romanTens + "X"
    }
  } else if(tens == 10) {
    romanTens = "X"
  } 

  if(ones == 9) {
    romanOnes = "IX"
  } else if(ones > 5 && ones < 9) {
    romanOnes = "V"
    for(let i = 0; i < ones - 5; i++) {
      romanOnes = romanOnes + "I"
    }
  } else if(ones == 5) {
    romanOnes = "V"
  } else if(ones == 4) {
    romanOnes = "IV"
  } else if(ones > 1 && ones < 4) {
    romanOnes = "I"
    for(let i = 0; i < ones - 1; i++) {
      romanOnes = romanOnes + "I"
    }
  } else if(ones == 1) {
    romanOnes = "I"
  }

  return romanThousands + romanHundreds + romanTens + romanOnes
}

console.log(convertNumToRoman(2311))
console.log(convertNumToRoman(2008))
console.log(convertNumToRoman(2500))
console.log(convertNumToRoman(1990))
// for(let i = 1; i <= 9; i++) {
//   console.log(convertNumToRoman(i))
// }
