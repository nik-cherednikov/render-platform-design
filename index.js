import popupControl from "./js/popup";

popupControl.init();

var control = document.getElementById("control");
var progressValue = document.querySelector(".progress__value");

var RADIUS = 54;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function progress(value) {
  var progress = value / 100;
  var dashoffset = CIRCUMFERENCE * (1 - progress);

  console.log("progress:", value + "%", "|", "offset:", dashoffset);

  progressValue.style.strokeDashoffset = dashoffset;
}

control.addEventListener("input", function(event) {
  progress(event.target.valueAsNumber);
});

progressValue.style.strokeDasharray = CIRCUMFERENCE;
progress(60);
