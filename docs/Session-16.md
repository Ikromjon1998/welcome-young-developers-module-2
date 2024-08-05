# 🌟 Session 16: Module 2 Challenge: Create and Present Your Interactive Website! 🚀

Welcome to the grand finale! 🎉 Today, you'll create a fun and interactive final project that showcases your web development skills. You’ll build a website with quizzes, data visualization, and more. Ready to shine? Let’s get started!

## 🎯 **Challenge Goals**

By the end of this session, you will:
1. Build an interactive webpage that includes a quiz and a data visualization feature.
2. Publish your project on GitHub Pages.
3. Share your project and get feedback from your classmates.

## 📖 **Challenge Overview**

In this challenge, you will create a website with the following features:
1. **Interactive Quiz**: A small quiz with multiple-choice questions.
2. **Data Visualization**: A simple graph to display some data.

### **1. Build Your Interactive Quiz**

1. **Create a New HTML File**:

   ```html
   <!-- quiz.html -->
   <html>
   <head>
       <title>Interactive Quiz</title>
       <link rel="stylesheet" href="style.css">
   </head>
   <body>
       <header>
           <h1>Interactive Quiz</h1>
       </header>
       <main>
           <form id="quizForm">
               <p>1. What is the capital of France?</p>
               <input type="radio" id="paris" name="question1" value="Paris">
               <label for="paris">Paris</label><br>
               <input type="radio" id="berlin" name="question1" value="Berlin">
               <label for="berlin">Berlin</label><br>
               <input type="radio" id="madrid" name="question1" value="Madrid">
               <label for="madrid">Madrid</label><br><br>
               
               <p>2. What is 2 + 2?</p>
               <input type="radio" id="3" name="question2" value="3">
               <label for="3">3</label><br>
               <input type="radio" id="4" name="question2" value="4">
               <label for="4">4</label><br>
               <input type="radio" id="5" name="question2" value="5">
               <label for="5">5</label><br><br>
               
               <button type="button" onclick="submitQuiz()">Submit</button>
           </form>
           <div id="result"></div>
       </main>
       <script src="script.js"></script>
   </body>
   </html>
   ```

2. **Add JavaScript for Quiz Functionality**:

   ```javascript
   // script.js
   function submitQuiz() {
       const form = document.getElementById('quizForm');
       const resultDiv = document.getElementById('result');
       let score = 0;

       if (form.question1.value === 'Paris') score++;
       if (form.question2.value === '4') score++;

       resultDiv.innerHTML = `You scored ${score} out of 2!`;
   }
   ```

3. **Style Your Quiz**:

   ```css
   /* style.css */
   body {
       font-family: Arial, sans-serif;
   }

   header {
       background-color: #333;
       color: white;
       padding: 10px;
       text-align: center;
   }

   main {
       padding: 20px;
       text-align: center;
   }

   button {
       background-color: #4CAF50;
       color: white;
       padding: 10px 20px;
       border: none;
       cursor: pointer;
   }

   button:hover {
       background-color: #45a049;
   }
   ```

### **2. Add a Data Visualization**

1. **Create a New HTML File for Visualization**:

   ```html
   <!-- chart.html -->
   <html>
   <head>
       <title>Data Visualization</title>
       <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
       <link rel="stylesheet" href="style.css">
   </head>
   <body>
       <header>
           <h1>Data Visualization</h1>
       </header>
       <main>
           <canvas id="myChart" width="400" height="200"></canvas>
           <script src="chart.js"></script>
       </main>
   </body>
   </html>
   ```

2. **Add JavaScript for Chart**:

   ```javascript
   // chart.js
   const ctx = document.getElementById('myChart').getContext('2d');
   const myChart = new Chart(ctx, {
       type: 'bar',
       data: {
           labels: ['January', 'February', 'March', 'April'],
           datasets: [{
               label: 'Number of Visits',
               data: [12, 19, 3, 5],
               backgroundColor: [
                   'rgba(255, 99, 132, 0.2)',
                   'rgba(54, 162, 235, 0.2)',
                   'rgba(255, 206, 86, 0.2)',
                   'rgba(75, 192, 192, 0.2)'
               ],
               borderColor: [
                   'rgba(255, 99, 132, 1)',
                   'rgba(54, 162, 235, 1)',
                   'rgba(255, 206, 86, 1)',
                   'rgba(75, 192, 192, 1)'
               ],
               borderWidth: 1
           }]
       },
       options: {
           scales: {
               y: {
                   beginAtZero: true
               }
           }
       }
   });
   ```

### **3. Test and Publish Your Project**

1. **Check Your Pages Locally**:
   - Open both `quiz.html` and `chart.html` in your browser to ensure they work correctly.

2. **Commit and Push Your Changes**:
   - Add, commit, and push your changes to GitHub.

   ```bash
   git add .
   git commit -m "Added interactive quiz and data visualization"
   git push origin main
   ```

3. **Update GitHub Pages**:
   - Verify that GitHub Pages is set up for your repository and that your changes are live.

### **4. Share and Present Your Project**

1. **Share Your URL**:
   - Share the live URL of your project with your classmates.

2. **Present Your Work**:
   - Briefly present your project to your classmates, explaining the quiz and data visualization features you implemented.

3. **Feedback Session**:
   - Exchange feedback with your classmates. What did you like about their projects? What could be improved?

## 📚 **Interactive Quiz**

Let’s test your knowledge with a quick quiz about today’s challenge!

1. **What feature did you add to your website to make it interactive?**
    - a) Data visualization
    - b) A quiz
    - c) Both

2. **Which JavaScript library did we use for creating charts?**
    - a) jQuery
    - b) Chart.js
    - c) D3.js

3. **How can you share your project with others?**
    - a) By sending the HTML files via email
    - b) By sharing the live URL from GitHub Pages
    - c) By printing your code

### **Quiz Answers:**

1. **c) Both**: You added both a quiz and a data visualization to your project.
2. **b) Chart.js**: Chart.js is used to create charts and graphs.
3. **b) By sharing the live URL from GitHub Pages**: This allows others to view your live project online.

## ✨ **Wrap-Up and Homework**

You’ve done a fantastic job on your final project! Here’s how to wrap things up:

- **Homework:** Continue to refine your project based on feedback. Explore adding more features or improving the design.
- **Additional Practice:** Start a new project or contribute to an existing one on GitHub to keep your skills sharp.

## 🚀 **Fun Fact!**

Did you know that interactive features like quizzes and data visualizations are used in many websites to engage users and provide valuable information? Your final project is a great example of these techniques!

Congratulations on completing Module 2! Keep coding, keep exploring, and keep creating amazing websites!

Happy Coding and Showcasing! 🌟
