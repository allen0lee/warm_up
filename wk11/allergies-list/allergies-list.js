class Allergies {
  constructor(score) {
    this.score = score
    this.allergiesList = []
  }

  list() {
    let allergiesItems = [
      {name: 'eggs', value: 1},
      {name: 'peanuts', value: 2},
      {name: 'shellfish', value: 4},
      {name: 'strawberries', value: 8},
      {name: 'tomatoes', value: 16},
      {name: 'chocolate', value: 32},
      {name: 'pollen', value: 64},
      {name: 'cats', value: 128}
    ]

    allergiesItems.sort((a, b) => {
      return b.value - a.value // sort from biggest to smallest
    })

    allergiesItems.forEach(item => {
      if(item.value <= this.score) {
        this.allergiesList.push(item.name)
        this.score = this.score - item.value
      } 
    })

    return this.allergiesList
  }

}

a = new Allergies(256)
console.log(a.list())




