const findDuplicate = require('./find-duplicate.js')

test('1st duplicate', () => {
  expect(findDuplicate([6,7,4,5,3,5,1])).toEqual(5)
}) 

test('no duplicate', () => {
  expect(findDuplicate([6,7,4,3,5,1])).toEqual([])
}) 