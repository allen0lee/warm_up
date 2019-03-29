var count = 0;

for(var num = 1; num <= 200; num++) {
    if(num%7 == 0) {
        console.log(num);
    }
    if(num%2 != 0) {
        if(count%2 != 0) {
            console.log(`${num} is second odd number.`);
        }
        count++;
    }
}

/*
for(var num = 1; num <= 200; num++) {
    if(num%2 != 0) {
        if(count%2 != 0) {
            console.log(`${num} is second odd number.`);
        }
        count++;
    }
}
*/

console.log('#####################');

var i = 0;
for(var num = 1; num <= 200; num++) {
    if(num%2 == 0){     
        while(num == 10 * i +2) {
            console.log(num);
            i++;
        }

    }        
}