// const _ = require('underscore')

const findDuplicate = (array) => {
  let duplicates = array.filter((element, index) => array.indexOf(element) != index)
  return duplicates.length == 0 ? [] : duplicates[0]
}

console.log(findDuplicate([6,7,4,5,3,5,1]))

module.exports = findDuplicate

var names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']

var uniq = names
  .map((name) => {
    return {
      count: 1,
      name: name
    }
  })
  .reduce((a, b) => {
    a[b.name] = (a[b.name] || 0) + b.count
    return a
  }, {})

// console.log(uniq)

var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)

// console.log(duplicates)