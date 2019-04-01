/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.
*/

var wordReverse = function(inputString) {
    var tmp = [];
    for (var i = 0; i < inputString.length; i++) {
        tmp.push(inputString.substring(i, i + 1));
    }
    return tmp.reverse().join('');
}

var checkPalindrome = function(inputString) {
    /*
    for(var i = 0; i < inputString.length; i++) {
        if(inputString.charAt(i) == inputString.charAt(inputString.length - 1 - i)) {
            console.log(`${inputString} is a palindrome`);
            return true;
        } else {
            console.log(`${inputString} is not a palindrome`);
            return false;
        }     
    }
    */
    
    if(inputString == wordReverse(inputString)) {
        console.log(`${inputString} is a palindrome`);
        return true;
    } 
    else {
        console.log(`${inputString} is not a palindrome`);
        return false;
    }

}

wordReverse('abut');
checkPalindrome('abuttuba');
checkPalindrome('acaramanamaraca');
checkPalindrome('asantaatnasa');
checkPalindrome('amymustijujitsumyma');
checkPalindrome('arewenotpurenosirpanamasmoodynoriegabragsitisgarbageironydoomsamanaprisoneruptonewera');
checkPalindrome('anneivotemorecarsracerometovienna');
checkPalindrome('asipeesiriseepisa');
checkPalindrome('arewenotdrawnonwardwefewdrawnonwardtonewera');
checkPalindrome('aremacnoliverevereviloncamera');
checkPalindrome('arewenotdrawnonwardtonewera');
checkPalindrome('arewenotdrawnonwardwefewdrawnonwardtonewera');
checkPalindrome('artnamenotubtimeemitbutonemantra');


var row = 10;
for(var i = 1; i <= row; i++){
    for(var j = 1; j <= row - i; j++){
	    document.write('&nbsp');
	}
    for(var k = 1; k <= 2 * (i - 1) + 1; k++) {
        document.write('$')
    }
    document.write('<br>');
}

for(var i = 0; i < row; i++){
    for(var j = 0; j <= i; j++){
        document.write('*');
    }
    document.write('<br>');
}