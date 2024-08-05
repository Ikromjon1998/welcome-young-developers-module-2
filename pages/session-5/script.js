// Function to count numbers from 1 to 10 and display them
function countNumbers() {
    let countDisplay = document.getElementById('countDisplay');
    countDisplay.innerHTML = ''; // Clear previous content

    for (let i = 1; i <= 10; i++) {
        countDisplay.innerHTML += i + "<br>";
    }
}

// Function to check the quiz answers
function checkQuiz() {
    const answers = {
        q1: 'a',
        q2: 'c',
        q3: 'a'
    };

    const form = document.getElementById('quizForm');
    const result = document.getElementById('quizResult');
    let score = 0;

    for (let [key, value] of Object.entries(answers)) {
        const selected = form.querySelector(`input[name=${key}]:checked`);
        if (selected && selected.value === value) {
            score++;
        }
    }

    result.textContent = `You got ${score} out of 3 questions right!`;
}

// Function to show project results
function showProjectResults() {
    const projectResults = document.getElementById('projectResults');
    projectResults.innerHTML = `
        <h3>Project Results:</h3>
        <p>Counting up from 1 to 10:</p>
        <p id="countUp"></p>
        <p>Counting down from 10 to 1:</p>
        <p id="countDown"></p>
        <p>Even numbers from 1 to 10:</p>
        <p id="evenNumbers"></p>
        <p>Odd numbers from 1 to 10:</p>
        <p id="oddNumbers"></p>
    `;

    // Populate the results
    let countUp = document.getElementById('countUp');
    for (let i = 1; i <= 10; i++) {
        countUp.innerHTML += i + " ";
    }

    let countDown = document.getElementById('countDown');
    for (let i = 10; i >= 1; i--) {
        countDown.innerHTML += i + " ";
    }

    let evenNumbers = document.getElementById('evenNumbers');
    for (let i = 2; i <= 10; i += 2) {
        evenNumbers.innerHTML += i + " ";
    }

    let oddNumbers = document.getElementById('oddNumbers');
    for (let i = 1; i <= 10; i += 2) {
        oddNumbers.innerHTML += i + " ";
    }
}
