//var fakeMap = [[], [], [], [], []];

var fakeMap = [];


var makeFakeMap = function(rowIndex, columnIndex) {
    for(var i = 0; i < rowIndex; i++) {
        fakeMap.push([]);
    }

    for(var i = 0; i < columnIndex; i++) {
        for(var j = 0; j < fakeMap.length; j++) {
            fakeMap[j].push('A');
        } 
    }



    var positionX = Math.floor(Math.random() * columnIndex);
    var randomRowIndex = Math.floor(Math.random() * rowIndex);

    //for(var i = 0; i < rowIndex; i++) {
    //     for(var j = 0; j < columnIndex; j++) {
    //         fakeMap[j].push('A');
    //     }  
    // }
 
    fakeMap[randomRowIndex].splice(positionX, 1, 'X'); //replace element in array

    //console.log('[ \n');

    //for(var k = 0; k < fakeMap.length; k++) {
        //if(k != fakeMap.length - 1) {
            //console.log('["' + fakeMap[k].join('","'));
            //console.log(fakeMap.join('\n'));

        //} else {
            //console.log('[' + fakeMap[k] + '] \n');
            //console.log(fakeMap[k].join('\n ];'));
        //}   
    //}

    console.log(fakeMap.join('\n'));

    //console.log('];');
    

    //console.log(fakeMap);
}

makeFakeMap(5, 5);