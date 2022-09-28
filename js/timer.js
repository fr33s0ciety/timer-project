class Timer {
  constructor(inputValue, playButton, pauseButton, callbacks) {
    this.inputValue = inputValue;
    this.playButton = playButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onPause = callbacks.onPause;
    }

    this.playButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    if (!this.timeRemaining) {
      alert("Input Time First");
      return;
    }
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.interval = setInterval(this.tick, 20);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onPause) {
        this.onPause();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  pause = () => {
    clearInterval(this.interval);
    if (this.onPause) {
      this.onPause();
    }
  };

  get timeRemaining() {
    return parseFloat(this.inputValue.value);
  }

  set timeRemaining(time) {
    this.inputValue.value = time.toFixed(2);
  }
}
