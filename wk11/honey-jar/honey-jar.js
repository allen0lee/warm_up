class HoneyJar {
  constructor(number, open) {
    this.number = number
    this.open = open
  }

  visit() {
    return !this.open
  }
}

const findOpen = (jarsOfHoney, numOfVisit) => {
  // jarsOfHoney.forEach(jar => {
  //   jar.open = jar.visit()
  // })

  
  // for(let i = 1; i < jarsOfHoney.length; i = i + 2) {
  //   // if(i % 2 != 0) { // visit every 2nd jar
  //     jarsOfHoney[i].open = jarsOfHoney[i].visit()
  //   // }
  // }


  // for(let i = 2; i < jarsOfHoney.length; i = i + 3) {
  //   // visit every 3rd jar
  //   jarsOfHoney[i].open = jarsOfHoney[i].visit()
  // }


  for(let visitCount = 0; visitCount < numOfVisit; visitCount++) {
    for(let i = visitCount; i < 100; i = i + 1 + visitCount) {
      jarsOfHoney[i].open = jarsOfHoney[i].visit()
    }
  }

  let jarsOpen = []
  jarsOfHoney.forEach(jar => {
    if(jar.open == true) {
      jarsOpen.push(jar)
    }
  })

  return jarsOpen
}

let jarsOfHoney = []
for(let number = 1; number <= 100; number++) {
  let h = new HoneyJar(number, false)
  jarsOfHoney.push(h)
}

findOpen(jarsOfHoney, 100).forEach(jarOpen => {
  console.log(jarOpen.number)
})