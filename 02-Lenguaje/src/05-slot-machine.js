//Slot Machine

class SlotMachine {
  constructor() {
    this.counter = 0;
  }

  play() {
    this.increaseCounter();

    const firstBoolean = this.randomBoolean();
    const secondBoolean = this.randomBoolean();
    const thirdBoolean = this.randomBoolean();

    if (firstBoolean && secondBoolean && thirdBoolean) {
      console.log(`Congratulations!!!. You won ${this.counter} coins!!`);
      this.reset();
    } else {
      console.log("Good luck next time!!");
    }
  }

  randomBoolean() {
    return Math.random() >= 0.5;
  }

  increaseCounter() {
    this.counter++;
  }

  reset() {
    this.counter = 0;
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
