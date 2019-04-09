/*
1. Create 3 boxes (divs) in an html file, give them a border of 1px solid black and a height and width of 100px, so you can see them.
2. When you click on any box, it's background color should immediately become red.
3. After every box has been clicked, change all of them immediately to green.
*/

var becomeRed = document.querySelectorAll('div');


var handleClickRed = function(event) {
    event.target.style.backgroundColor = 'red';

    event.target.classList.toggle('clicked');

    //document.querySelectorAll('.clicked') - an empty NodeList []
    if(document.querySelectorAll('.clicked').length == becomeRed.length) { //becomeRed.length = 3
        setTimeout(function() {
            becomeRed.forEach(function(becomeGreen) {
                becomeGreen.style.backgroundColor = 'green';
            });
        }, 1000);
    }

}

becomeRed.forEach(function(item) {
    item.addEventListener('click', handleClickRed);
});

