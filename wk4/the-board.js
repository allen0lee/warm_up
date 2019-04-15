/*
Write a program that creates a string that represents an 8×8 grid, using new- line 
characters to separate lines. At each position of the grid there is either a space 
or a “#” character. The characters should form a chess board. Passing this string to 
console.log should show something like this:

# # # # # # # #
 # # # # # # # #
# # # # # # # #
 # # # # # # # #

Extension
When you have a program that generates this pattern, define a variable size = 8 
and change the program so that it works for any size, outputting a grid of 
the given width and height. Then, define a variable symbol that generates the board 
using the specified character instead.

*/

var chessBoard1 = '';
var chessBoard2 = '';

for(var rowIndex = 0; rowIndex < 8; rowIndex++) {
    chessBoard1 = chessBoard1 + '#' + ' ';
    chessBoard2 = ' ' + '#' + chessBoard2;
}

for(var columnIndex = 0; columnIndex < 8; columnIndex++) {
    if(columnIndex%2 == 0) {
        console.log(chessBoard1);
    }
    if(columnIndex%2 != 0) {
        console.log(chessBoard2);
    }
}

var chessBoard3 = '';
var chessBoard4 = '';

var generateBoard = function(size, symbol) {
    for(var rowIndex = 0; rowIndex < size; rowIndex++) {
        chessBoard3 = chessBoard3 + symbol + ' ';
        chessBoard4 = ' ' + symbol + chessBoard4;
    }
    
    for(var columnIndex = 0; columnIndex < size; columnIndex++) {
        if(columnIndex%2 == 0) {
            console.log(chessBoard3);
        }
        if(columnIndex%2 != 0) {
            console.log(chessBoard4);
        }
    }
}

generateBoard(10, '*');