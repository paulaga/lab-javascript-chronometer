// Constructor
function Chronometer() {
 this.currentTime = 0;
 this.intervalId = 0;
 this.mili = 0;
 this.ms = 0;
 this.sec = 0;
 this.min = 0;
}

Chronometer.prototype.startClick = function () {
  let that = this;
  this.intervalId = setInterval( () => {
    that.setTime();
    that.mili++;
    if(that.mili == 100) {
      that.currentTime++;
      that.mili = 0;
    }
  }, 10);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (t) {
  t = t.toString()
  return (t.length == 1) ? `0${t}` : t;
};

Chronometer.prototype.setTime = function () {
  this.min = this.twoDigitsNumber(this.setMinutes());
  this.sec = this.twoDigitsNumber(this.setSeconds());
  this.ms = this.twoDigitsNumber(this.setMilliseconds());
};

Chronometer.prototype.setMilliseconds = function () {
  return this.mili;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);   
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.mili = 0;
  this.setTime();
};

Chronometer.prototype.splitClick = function () {
};