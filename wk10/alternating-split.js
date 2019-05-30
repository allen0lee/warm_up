const _ = require('underscore')

const encrypt = (text, n) => {
  let encryptedText = ''
  
  if(n <= 0 || text == null || text == '') {
    return text
  } else {
    let arrayOfChars = []
    let secondChar = ''
    let arrayNot2ndChars = []
    let counter = 1

    for(let i = 0; i < n; i++) {
      if(counter == 1) { // 1st time deal with original text
        arrayOfChars = text.split('') // -> [ 't', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 't', 'e', 's', 't' ]
        secondChar = arrayOfChars.splice(1, 1, '').join('') // -> 'h'
      } else {
        arrayOfChars = encryptedText.split('')
        secondChar = arrayOfChars.splice(1, 1, '').join('') 
      }
      
      arrayNot2ndChars = arrayOfChars.join('').split('') // -> [ 't', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 't', 'e', 's', 't' ]

      encryptedText = secondChar + _.shuffle(arrayNot2ndChars).join('')

      counter++
    }

    return encryptedText
  }
}

// console.log(encrypt("This is a test!", 1))
// console.log(encrypt("h  at!sstiie sT", 1))

// console.log(encrypt("This is a test!", 2))
// console.log(encrypt("This is a test!", 5))
// console.log(encrypt("This is a test!", 0))
// console.log(encrypt("", 0))

const decrypt = (encryptedText, n) => {
  if(n <= 0 || encryptedText == null || encryptedText == '') {
    return encryptedText
  } else {
    let arrayOfChars = encryptedText.split('') 

    for(let i = 0; i < n; i++) {
      let everySecondChars = []
      let everyOtherChars = []

      for(let j = 0; j < arrayOfChars.length; j++) {
        if(j % 2 != 0) {
          everyOtherChars.push(arrayOfChars[j])
        } else if (j % 2 == 0) {
          everySecondChars.push(arrayOfChars[j])
        }
      }

      arrayOfChars = everyOtherChars.concat(everySecondChars)

    }

    return arrayOfChars.join('')
  }
}


const encryptEvery2ndChars = (text, n) => {
  if(n <= 0 || text == null || text == '') {
    return text
  } else {
    let arrayOfChars = text.split('') // -> [ 't', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 't', 'e', 's', 't' ]

    for(let i = 0; i < n; i++) {
      let everySecondChars = []
      let everyOtherChars = []

      for(let j = 0; j < arrayOfChars.length; j++) {
        if(j % 2 != 0) {
          everySecondChars.push(arrayOfChars[j])
        } else if (j % 2 == 0) {
          everyOtherChars.push(arrayOfChars[j])
        }
      }

      arrayOfChars = everySecondChars.concat(everyOtherChars)

    }

    return arrayOfChars.join('')
  }
}


console.log(encryptEvery2ndChars("This is a test!", 1))
console.log(decrypt(encryptEvery2ndChars("This is a test!", 1), 1))
console.log(encryptEvery2ndChars("This is a test!", 2))
console.log(decrypt(encryptEvery2ndChars("This is a test!", 2), 2))
console.log(encryptEvery2ndChars("This is a test!", 3))
console.log(decrypt(encryptEvery2ndChars("This is a test!", 3), 3))
console.log(encryptEvery2ndChars("This is a test!", 4))
console.log(decrypt(encryptEvery2ndChars("This is a test!", 4), 4))
