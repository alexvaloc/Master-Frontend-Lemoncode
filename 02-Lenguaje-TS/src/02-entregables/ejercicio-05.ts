console.log("************** DELIVERABLE 05 *********************");
//Slot Machine

class SlotMachine {
  private counter: number;

  constructor() {
    this.counter = 0;
  }

  play(): void {
    this.increaseCounter();

    const firstBoolean: boolean = this.randomBoolean();
    const secondBoolean: boolean = this.randomBoolean();
    const thirdBoolean: boolean = this.randomBoolean();

    if (firstBoolean && secondBoolean && thirdBoolean) {
      console.log(`Congratulations!!!. You won ${this.counter} coins!!`);
      this.reset();
    } else {
      console.log("Good luck next time!!");
    }
  }

  private randomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  private increaseCounter(): void {
    this.counter++;
  }

  private reset(): void {
    this.counter = 0;
  }
}

const machine1: SlotMachine = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
