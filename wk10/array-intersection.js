var threeWayIntersection = function(array1, array2, array3) {
    return array1
                    .filter(element => array2.includes(element))
                    .filter(element => array3.includes(element))
}

console.log(threeWayIntersection([1,3,4,6], [2,3,4,7], [3,4,7,8,9])) // --> [3, 4]


var nWayIntersection = function(arrayOfArrays) {
    return arrayOfArrays.reduce((a, b) => 
        a.filter(c => b.includes(c))
    )
}

console.log(nWayIntersection([[3,9], [6,8,9], [1,9,10], [9], [9,11,14]])) // --> [9]