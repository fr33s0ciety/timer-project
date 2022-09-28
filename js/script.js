const inputValue = document.querySelector("input");
const playButton = document.querySelector("#playBtn");
const pauseButton = document.querySelector("#pauseBtn");

const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;

circle.setAttribute("stroke-dasharray", perimeter);

let duration;

const makeTimer = new Timer(inputValue, playButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
    playButton.setAttribute("disabled", true);
    if (pauseButton.hasAttribute("disabled")) {
      pauseButton.removeAttribute("disabled");
    }
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onPause() {
    pauseButton.setAttribute("disabled", true);
    if (playButton.hasAttribute("disabled")) {
      playButton.removeAttribute("disabled");
    }
  },
});
