let newGuess = null;
let currentGuess = null;
const game = {
  title: 'Guess the Number!',
  biggestNum: 5,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    // this.smallestNum = parseInt(prompt('Enter the smallest number:'));
    this.smallestNum = parseInt(document.getElementById('small').value);  // GOOD
    // this.biggestNum = parseInt(prompt('Enter the biggest number:'));
    this.biggestNum = parseInt(document.getElementById('big').value);  // GOOD
    if (this.secretNum === null) {
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;  // GOOD
    }
    // let newGuess = null;
    newGuess = this.getGuess();  // GOOD
    while (newGuess === 'error') {
      newGuess = this.getGuess();
    }
    this.prevGuesses.push(newGuess);  // GOOD
    this.render();  // GOOD
    return;
  },
  render: function() {
    // let currentGuess = this.prevGuesses[this.prevGuesses.length - 1];
    currentGuess = this.prevGuesses[this.prevGuesses.length - 1];  // GOOD
    if (currentGuess === this.secretNum) {
      // alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`);
      document.getElementById('render').innerHTML = (`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`);  // GOOD
    } else if (currentGuess > this.secretNum) {
      // alert(` Your guess is too high
      // Previous guesses: ${this.prevGuesses.join(', ')}`);
      document.getElementById('render').innerHTML = (` Your guess is too high
      Previous guesses: ${this.prevGuesses.join(', ')}`);
    } else {
      // alert(` Your guess is too low
      // Previous guesses: ${this.prevGuesses.join(', ')}`);
      document.getElementById('render').innerHTML = (` Your guess is too low
      Previous guesses: ${this.prevGuesses.join(', ')}`);
    }
  },
  getGuess: function() {
    // let guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`));
    let guess = parseInt(document.getElementById('guess').value);
    // while ((!guess && guess !== 0) || guess < game.smallestNum || guess > game.biggestNum) {
    if ((!guess && guess !== 0) || guess < game.smallestNum || guess > game.biggestNum) {
      // guess = parseInt(prompt(`Error. Please enter a guess between ${this.smallestNum} and ${this.biggestNum}:`));
      document.getElementById('render').innerHTML = `Error. Please enter a guess between ${this.smallestNum} and ${this.biggestNum}:`;
      document.getElementById('guess').reset();
      return 'error';
    } else {
      return guess;
    }

    // return guess;

    // // better way to do it
    // if ((guess || guess === 0) && guess >= this.smallestNum && guess <= this.biggestNum) {
    //   return guess;
    // } else {
    // guess = parseInt(prompt(`Error. Please enter a guess between ${this.smallestNum} and ${this.biggestNum}:`));
    // }
  }
};
document.getElementById('play').addEventListener('click', function() {
    game.play();  // GOOD
  }
);