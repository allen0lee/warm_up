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