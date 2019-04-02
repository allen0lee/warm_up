/*
Bob, Jimbo and Fish love mini golf. But, every time they hand in their score cards none of the scores 
are ever totalled. Write a function called totalScores in JS that calculates their scores and 
console.log the total for each player and their combined total.
*/

var players = [
    {name: 'Bob',
     holeScores: [3, 2, 6, 11, 9, 2, 6, 9, 10] 
    },
    {name: 'Jimbo',
     holeScores: [5, 12, 9, 22, 13, 7, 16, 10, 11] 
    },
    {name: 'Fish',
     holeScores: [2, 2, 4, 5, 4, 3, 6, 4, 1] 
    }
]

var totalScores = function(players) {  
    for(var i = 0; i < players.length; i++) {
        var total = 0;
        for(var j = 0; j < players[i].holeScores.length; j++) {
            total = total + players[i].holeScores[j];
        }
        console.log(`${players[i].name}'s score is ${total}`);
    }  
}

totalScores(players);


/*
Extension
Now work out each golfers round compared to the course par.

Ninja Extension
Fish loves a punt. Having placed a $1 bet on each stroke over par that Bob and 
Jimbo played per hole calculate his winnings.
*/

/*
var compareWinning = function() {
    var par = [3, 4, 5, 5, 3, 3, 4, 3, 5];
    var winning = [];
    for(var i = 0; i < score.length; i++) {
        for(var j = 0; j < score[i].hole.length; j++) {
            var difference = score[i].hole[j] - par[j];
            winning.push(difference);
        }

    }
    
}
*/



