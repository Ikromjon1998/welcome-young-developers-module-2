# 🌟 Session 4: JavaScript Decisions: If/Else Statements! 🎉

Welcome back, young coders! Today, we’re going to explore how to make your websites smarter with JavaScript decisions using if/else statements. Ready to create a simple quiz and see your website make choices? Let’s get started!

## 🎯 **Learning Goals for Today**

By the end of this session, you will:
1. Understand what if/else statements are and how they work.
2. Learn how to implement if/else statements in JavaScript.
3. Create a simple quiz that provides feedback based on the user's answers.

## 📖 **Introduction to JavaScript Decisions**

### **What are If/Else Statements?**

If/else statements allow your code to make decisions based on certain conditions. They are like asking a question and choosing what to do next based on the answer. This is how you can make your website interactive and responsive to user input.

### **Key Concepts of If/Else Statements**

- **Condition**: A condition is something that can be true or false.
- **If Statement**: Runs a block of code if the condition is true.
- **Else Statement**: Runs a block of code if the condition is false.

## 🔍 **Exploring If/Else Statements**

### **1. Basic If/Else Statement**

- **Explanation**: An if statement checks if a condition is true, and if so, executes a block of code. An else statement can follow an if statement and executes a block of code if the condition is false.
- **Example**:

  ```javascript
  let age = 15;

  if (age >= 13) {
    console.log("You are a teenager!");
  } else {
    console.log("You are not a teenager yet.");
  }
  ```

### **2. Using If/Else with User Input**

- **Explanation**: You can use if/else statements to respond to user input. For example, you can ask the user a question and give feedback based on their answer.
- **Example**:

  ```javascript
  let userAnswer = prompt("What is 5 + 3?");
  
  if (userAnswer == 8) {
    alert("Correct!");
  } else {
    alert("Try again!");
  }
  ```

## 💻 **Interactive Coding Activity: Simple Quiz**

### **1. Set Up Your Coding Environment**

1. Open your favorite code editor.
2. Create a new HTML file named `quiz.html`.

### **2. Write Your If/Else Code**

Follow these steps to create a simple quiz:

1. **Step 1: Create the Basic HTML Structure**

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Quiz</title>
    </head>
    <body>
        <h1>Simple Quiz</h1>
        <p>What is 10 + 5?</p>
        <input type="text" id="answer" placeholder="Type your answer here">
        <button onclick="checkAnswer()">Submit</button>
        <p id="feedback"></p>

        <script src="quiz.js"></script>
    </body>
    </html>
    ```

2. **Step 2: Create the JavaScript File**

    Create a file named `quiz.js` and add the following code:

    ```javascript
    function checkAnswer() {
        let userAnswer = document.getElementById('answer').value;
        let feedback = document.getElementById('feedback');

        if (userAnswer == 15) {
            feedback.innerHTML = "Correct! Well done!";
        } else {
            feedback.innerHTML = "Try again!";
        }
    }
    ```

3. **Save and Open Your File**:

    - Save both `quiz.html` and `quiz.js`.
    - Open `quiz.html` in your web browser to test your quiz.

### **3. Experiment with Your Own Content**

Try adding more questions to your quiz or different types of feedback based on different answers.

- **Challenge**: Add another question to your quiz with a new input field and button. Use if/else statements to check the answers.

## 📚 **Interactive Quiz**

Let’s test your knowledge with a fun quiz! Answer the following questions to see how much you’ve learned.

1. **What does an if statement do?**
    - a) Always runs the code inside it.
    - b) Checks a condition and runs the code if the condition is true.
    - c) Always skips the code inside it.

2. **What does an else statement do?**
    - a) Runs the code if the if statement's condition is true.
    - b) Runs the code if the if statement's condition is false.
    - c) Always runs the code inside it.

3. **Which of the following is a correct if/else statement in JavaScript?**
    - a) `if x > 10 { console.log("x is greater than 10"); } else { console.log("x is less than or equal to 10"); }`
    - b) `if (x > 10) { console.log("x is greater than 10"); } else { console.log("x is less than or equal to 10"); }`
    - c) `if (x > 10) console.log("x is greater than 10") else console.log("x is less than or equal to 10")`

### **Quiz Answers:**

1. b) Checks a condition and runs the code if the condition is true.
2. b) Runs the code if the if statement's condition is false.
3. b) `if (x > 10) { console.log("x is greater than 10"); } else { console.log("x is less than or equal to 10"); }`

## 🛠️ **Hands-On Project: Personalized Quiz**

In this project, you’ll build a more complex quiz with multiple questions using the skills you’ve learned today.

### **Project Steps:**

1. **Create a NEW HTML File:** Name it `personalized_quiz.html`.
2. **Add Your Basic HTML Structure:**

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Personalized Quiz</title>
    </head>
    <body>
        <h1>Personalized Quiz</h1>
        <div id="quiz-container">
            <!-- Quiz questions will go here -->
        </div>
        <button onclick="submitQuiz()">Submit Quiz</button>
        <p id="final-feedback"></p>

        <script src="personalized_quiz.js"></script>
    </body>
    </html>
    ```

3. **Create the JavaScript File:**

    Create a file named `personalized_quiz.js` and add the following code:

    ```javascript
    function submitQuiz() {
        let score = 0;

        let question1 = document.querySelector('input[name="question1"]:checked').value;
        if (question1 == "10") {
            score++;
        }

        let question2 = document.querySelector('input[name="question2"]:checked').value;
        if (question2 == "20") {
            score++;
        }

        let finalFeedback = document.getElementById('final-feedback');
        if (score == 2) {
            finalFeedback.innerHTML = "You got all the answers correct! Great job!";
        } else {
            finalFeedback.innerHTML = "You got " + score + " out of 2 correct. Keep practicing!";
        }
    }
    ```

4. **Add Quiz Questions in HTML:**

    Update the `quiz-container` div in your `personalized_quiz.html` file:

    ```html
    <div id="quiz-container">
        <p>What is 5 + 5?</p>
        <input type="radio" name="question1" value="10">10<br>
        <input type="radio" name="question1" value="11">11<br>
        <input type="radio" name="question1" value="12">12<br>

        <p>What is 10 + 10?</p>
        <input type="radio" name="question2" value="19">19<br>
        <input type="radio" name="question2" value="20">20<br>
        <input type="radio" name="question2" value="21">21<br>
    </div>
    ```

5. **Save and Preview:**

    - Save both `personalized_quiz.html` and `personalized_quiz.js`.
    - Open `personalized_quiz.html` in your web browser to test your personalized quiz.

## ✨ **Wrap-Up and Homework**

You did an amazing job today! To reinforce what you've learned:

- **Homework:** Create another quiz with at least three questions using if/else statements to provide feedback.
- **Additional Practice:** Try using if/else statements to create other interactive elements on a webpage, like a calculator or a form that checks if the entered data is valid.

## 🚀 **Fun Fact!**

Did you know that JavaScript was created in just 10 days in May 1995 by Brendan Eich? Now, you’re part of the awesome world of web development!
