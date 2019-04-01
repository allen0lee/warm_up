/*
Write a function 'grannyTalk' what takes a question as an argument and returns a string as her response.

If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"

If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"

The year will be a random year between 1930 and 1950.

If you say "BYE" to her she'll reply "What's that honey, I didn't hear you.."

bonus: write an additional function 'grandpaTalk' that when called, will call granny for you and interpret her responses incorrectly by swapping vowels randomly in the words of her responses.

sample output of grandpaTalk:

// NO, NOT SINCE incorrect year // whats that sunny
*/

var grannyTalk = function(question) {
    if(question != null) {
        if(question == 'BYE') {
            console.log(`What's that honey, I didn't hear you..`);
        }   
        else if(question.charAt(0) == question.charAt(0).toUpperCase()) { //normal, if first letter is uppercase
                if(question.substring(1, question.length + 1) == 
                    question.substring(1, question.length + 1).toUpperCase()) { //if it is all uppercase
                    var year = Math.floor(Math.random() * (1945 - 1930 + 1)) + 1930; //random number 1930 - 1945
                    console.log(`NO, NOT SINCE ${year}`);   
                }
                else {
                    console.log(`SPEAK UP SONNY JIM`);
                }
        }
        else { //none of the conditions apply
            console.log(`Talk to granny again`);
        }
    }
}

var question = prompt(`Talk to granny:`);
grannyTalk(question);

var grandpaTalk = function() {

}
