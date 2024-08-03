# 🌟 Session 7: Project - Guess the Number Game 🎮

Welcome back, young coders! Today, we’re diving into a super fun project where you'll create your own "Guess the Number" game using JavaScript. This project will help you practice using loops and conditionals in an interactive way. Ready to create your game? Let’s get started!

## 🎯 **Learning Goals for Today**

By the end of this session, you will:
1. Create a basic interactive game using JavaScript.
2. Use loops and conditionals to control game logic.
3. Get user input and provide real-time feedback.

## 📖 **Project Overview: Guess the Number Game**

### **What is the Guess the Number Game?**

The "Guess the Number" game challenges the player to guess a randomly chosen number within a specified range. The game will give feedback if the guess is too high, too low, or correct.

### **Key Concepts for the Project**

- **Random Number Generation**: Create a random number that the player has to guess.
- **Loops**: Repeat the process of asking for guesses until the player gets the right number.
- **Conditionals**: Check if the player's guess is too high, too low, or correct.
- **User Input**: Allow the player to input their guess and respond to it.

## 💻 **Interactive Coding Activity: Creating the Guess the Number Game**

### **1. Set Up Your Coding Environment**

1. Open your favorite code editor (such as Visual Studio Code).
2. Create a new folder for your project and open it in your code editor.
3. Inside this folder, create a new HTML file named `guess-the-number.html` and a new JavaScript file named `script.js`.

### **2. Write Your HTML Code**

Start by setting up the basic HTML structure for your game interface.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess the Number Game</title>
</head>
<body>
    <h1>Guess the Number Game</h1>
    <p>Try to guess the number between 1 and 100!</p>
    <input type="number" id="guessInput" placeholder="Enter your guess">
    <button onclick="guessNumber()">Guess</button>
    <p id="result"></p>
    <script src="script.js"></script>
</body>
</html>
```

### **3. Write Your JavaScript Code**

Now, let’s add the JavaScript to make the game work.

1. **Step 1**: Generate a random number

```javascript
// script.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); // For debugging purposes
```

2. **Step 2**: Function to handle the player's guess

```javascript
function guessNumber() {
    let guess = document.getElementById("guessInput").value;
    let result = document.getElementById("result");

    if (guess < randomNumber) {
        result.textContent = "Too low!";
    } else if (guess > randomNumber) {
        result.textContent = "Too high!";
    } else {
        result.textContent = "Correct! You guessed the number!";
    }
}
```

3. **Step 3**: Save and open your file

- Save both `guess-the-number.html` and `script.js`.
- Open `guess-the-number.html` in your web browser to see the game in action.

### **4. Enhancing the Game**

Let’s add some more features to make the game even more fun!

- **Track the number of attempts**: Add a counter to keep track of how many guesses the player has made.
- **Limit the number of guesses**: Make the game more challenging by limiting the number of guesses.

**JavaScript Code Enhancements:**

1. **Track the number of attempts**

```javascript
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
    let guess = document.getElementById("guessInput").value;
    let result = document.getElementById("result");
    attempts++;

    if (guess < randomNumber) {
        result.textContent = `Too low! Attempts: ${attempts}`;
    } else if (guess > randomNumber) {
        result.textContent = `Too high! Attempts: ${attempts}`;
    } else {
        result.textContent = `Correct! You guessed the number in ${attempts} attempts!`;
    }
}
```

2. **Limit the number of guesses**

```javascript
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 10;

function guessNumber() {
    let guess = document.getElementById("guessInput").value;
    let result = document.getElementById("result");
    attempts++;

    if (attempts <= maxAttempts) {
        if (guess < randomNumber) {
            result.textContent = `Too low! Attempts: ${attempts}`;
        } else if (guess > randomNumber) {
            result.textContent = `Too high! Attempts: ${attempts}`;
        } else {
            result.textContent = `Correct! You guessed the number in ${attempts} attempts!`;
        }
    } else {
        result.textContent = `Game over! The number was ${randomNumber}. Refresh to play again.`;
    }
}
```

### **5. Save and Preview**

- Save all your changes.
- Refresh your web browser to see the updated game.

### **6. Experiment with Your Own Content**

Try these additional challenges to customize your game:

- **Challenge 1**: Add a "Reset" button to restart the game without refreshing the page.
- **Challenge 2**: Add a difficulty level where the range of numbers changes (e.g., 1-50, 1-100, 1-200).

## ✨ **Wrap-Up and Homework**

You did an amazing job today! To reinforce what you've learned:

- **Homework**: Implement the challenges above to enhance your game.
- **Additional Practice**: Try making another game using loops and conditionals, like a "Rock, Paper, Scissors" game.

## 🚀 **Fun Fact!**

Did you know that the first computer game, "Spacewar!", was created in 1962 by Steve Russell? Now, you’re part of the awesome world of web development!

Happy Coding! 💻
