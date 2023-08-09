let stepCounter = {
  steps: 0,
  increase: function () {
    this.steps++;

    return this;
  },
  decrease: function () {
    if (this.steps > 0) {
      this.steps--;

      return this;
    }
  },
  reset: function () {
    this.steps = 0;
    return this;
  },
  read: function () {
    // this.steps;
    console.log(this.steps);
    return this;
  },
};
stepCounter.increase().increase().increase().decrease().decrease().read();
