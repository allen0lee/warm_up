/*
You are a sheep farmer, and are plagued by wolves which pretend to be sheep. 
Fortunately, you are good at spotting them.
Warn the sheep in front of the wolf that it is about to be eaten. 
Remember that you are standing at the end of the queue/array: 
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] (YOU ARE HERE AT THE FRONT OF THE QUEUE)
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
Note: there will always be exactly one wolf in the array.
*/

//no need to use for loop to find the index of wolf, use indexOf('wolf') 
//consider reverse the array to do calculation more easily: reverse()
var warnTheSheep = function(queueOfSheep) {
    var size = queueOfSheep.length;
    if(queueOfSheep[size - 1] == 'wolf') { // if wolf is in last
        return `Please go away and stop eating my sheep`;
    } else { //wolf in middle
        //for(var i = 0; i < size; i++) {   
            //if(queueOfSheep[i] == 'wolf') {
                return `Oi! Sheep number ${size - 1 - queueOfSheep.indexOf('wolf')}! You are about to be eaten by a wolf!`;
            //}
        //}
    }      
}

console.log(warnTheSheep(["sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep", "sheep", "sheep"]));