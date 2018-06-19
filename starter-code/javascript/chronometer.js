// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.mili = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function(){
    that.currentTime += 1;
    that.setTime();
  }, 1000);
  chronometer.setMilliseconds();
};

Chronometer.prototype.setMinutes = function () {
  var minutes = Math.floor(this.currentTime/60);
  return minutes;
};

Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime - (this.setMinutes()*60);
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (n) {
  var twoDigits = "" + n;
  
  if (twoDigits.length <= 1){
    return twoDigits = "0" + n;
  };
  return twoDigits;
};

Chronometer.prototype.setTime = function () {
 
};

Chronometer.prototype.setMilliseconds = function () {
  var that = this;
  var intervalId = setInterval(function () {
    console.log(that.mili)
    that.mili += 1;
    that.setTime();
    if (that.mili > 99) {
      //clearInterval(intervalId);
      that.mili = 0
    }
  }, 1);
  return this.mili;
  //var mili = this.currentTime - (this.setSeconds()*1000);
  //return mili;
};

Chronometer.prototype.stopClick = function () {
  return clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  return this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
