let chronometer = new Chronometer();
let btnLeft = document.getElementById("btnLeft");
let btnRight = document.getElementById("btnRight");
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let print = document.getElementById("splits");
let intervalId = "";

let mls, secs, mins;

function printTime() {
  printMilliseconds();
  printSeconds();
  printMinutes();
}

function printMinutes() {
  mins = chronometer.twoDigitsNumber(chronometer.setMinutes());
  minDec.innerText = mins[0];
  minUni.innerText = mins[1];
}

function printSeconds() {
  secs = chronometer.twoDigitsNumber(chronometer.setSeconds());
  secDec.innerText = secs[0];
  secUni.innerText = secs[1];
}

function printMilliseconds() {
  mls = chronometer.twoDigitsNumber(chronometer.setMilliseconds());
  milDec.innerText = mls[0];
  milUni.innerText = mls[1];
}

function printSplit() {
  let printLi = document.createElement('li');
  printLi.innerText = `${mins}:${secs}:${mls}`;
  print.appendChild(printLi);
}

function clearSplits() {
  chronometer.resetClick();
  printTime();
  print.innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.className = "btn start";
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (this.innerText == "START") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    intervalId = setInterval(function() {
      printTime();
    }, 10);
  } else {
    setStartBtn();
    setResetBtn();

    chronometer.stopClick();
    clearInterval(intervalId);
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (this.innerText == "RESET") {
    clearSplits();
  } else {
    printSplit();
  }
});