var setTime = document.querySelector('.time')

const displayCurrentTime = () => {
  setTime.textContent = new Date().toLocaleTimeString()
}

setInterval(displayCurrentTime, 1000)

// analog clock
$(function() {
  setInterval(function() {
    var seconds = new Date().getSeconds()
    var sdegree = seconds * 6
    var srotate = "rotate(" + sdegree + "deg)"
  
    $("#sec").css({ 
      "transform": srotate 
    })
 
  }, 1000)
  
  setInterval(function() {
    var hours = new Date().getHours()
    var mins = new Date().getMinutes()
    var hdegree = hours * 30 + (mins / 2)
    var hrotate = "rotate(" + hdegree + "deg)"
  
    $("#hour").css({
      "transform": hrotate
    })
      
  }, 1000)

  setInterval(function() {
    var mins = new Date().getMinutes()
    var mdegree = mins * 6
    var mrotate = "rotate(" + mdegree + "deg)"
  
    $("#min").css({ 
      "transform" : mrotate 
    })
      
  }, 1000 )

})

// document.getElementById("myDIV").style.transform = "rotate(7deg)"
// https://www.w3schools.com/jsref/prop_style_transform.asp