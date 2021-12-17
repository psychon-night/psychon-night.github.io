var finished = "Launched worldwide at 6:00 PM PST, December 16th 2021";
var countDownDate = new Date("Dec 16, 2021 6:00:00 PM").getTime();
// var countDownDate = new Date("Dec 17, 2021 7:17:00 AM").getTime();
var pulse = true

function runAfterFinish() {
    setInterval(tickAfterFinish(), 1000)
}

function disablePulseEffect() {
    if (pulse) {
        pulse = false
        document.getElementById("pulseBTTN").innerHTML = "Enable pulsing"
    } else {
        pulse = true
        document.getElementById("pulseBTTN").innerHTML = "Disable pulsing"
    }
}

function tickAfterFinish()  {
    var now = new Date().getTime();
    var howLongAgo = now - countDownDate;

    var days = Math.floor(howLongAgo / (1000 * 60 * 60 * 24));
    var hours = Math.floor((howLongAgo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((howLongAgo % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((howLongAgo % (1000 * 60)) / 1000);

    if (String(seconds).length == 1) {
        seconds = "0" + seconds
    }

    document.getElementById("demo").style = "color: green; font-size: 65px; font-family:'Garamond'; padding-top: 20%; "
    if (pulse) {
        document.getElementById("elapsed").style = "color: green; font-size: 65px; font-family:'Garamond'; animation: finishedPulse; animation-duration: 1s; animation-iteration-count: infinite"
    } else {
        document.getElementById("elapsed").style = "color: green; font-size: 65px; font-family:'Garamond';"
    }
    document.getElementById("demo").innerHTML = "Launched worldwide at 6:00 PM PST, December 16th 2021";
    document.getElementById("elapsed").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds ago"
    document.getElementById("title").innerHTML = "+" + hours + ":" + minutes + ":" + seconds;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function tick() {
// Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (String(minutes).length == 1) {
      minutes = "0" + minutes
  }

  if (String(seconds).length == 1) {
      seconds = "0" + seconds
  }

  // Display the result in the element with id="demo"
  if (hours < 3) {
      document.getElementById("demo").style = "color: yellow; font-size: 65px; font-family:'Garamond'; padding-top: 20%"
  }
  if (hours < 2) {
      document.getElementById("demo").style = "color: orange; font-size: 65px; font-family:'Garamond'; padding-top: 20%"
  }
  if (hours < 1) {
      document.getElementById("demo").style = "color: pink; font-size: 65px; font-family:'Garamond'; padding-top: 20%"
  }


  document.getElementById("demo").innerHTML = hours + ":"
  + minutes + ":" + seconds + " until worldwide launch";
  document.getElementById("title").innerHTML = hours + ":"
  + minutes + ":" + seconds;

  if (minutes == 0 || minutes == 00 || minutes == "00") {
    audio.play();
    if (pulse) {
        document.getElementById("demo").style = "color: pink; font-size: 65px; font-family:'Garamond'; padding-top: 20%; animation: pulse; animation-duration: 1s; animation-iteration-count: infinite"
    } else {
        document.getElementById("demo").style = "color: pink; font-size: 65px; font-family:'Garamond'; padding-top: 20%"
    }
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    runAfterFinish()
  }
}