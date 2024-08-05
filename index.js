// Session 1: JavaScript Events
document.getElementById('colorButton').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'orange';
});
document.getElementById('colorButton').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// Session 2: JavaScript and the DOM
document.getElementById('textButton').addEventListener('click', function() {
    document.getElementById('text').textContent = 'The text has been changed!';
});

// Session 3: Clickable Image Gallery
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainImage');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        mainImage.src = this.src.replace('thumbnail', 'image');
    });
});

// Session 4: If/Else Statements
document.getElementById('quizButton').addEventListener('click', function() {
    const answer = document.getElementById('quizAnswer').value.toLowerCase();
    const result = answer === 'yes' ? 'Correct!' : 'Try again!';
    document.getElementById('quizResult').textContent = result;
});

// Session 5: JavaScript Loops
document.getElementById('loopButton').addEventListener('click', function() {
    let output = '';
    for (let i = 1; i <= 10; i++) {
        output += i + '<br>';
    }
    document.getElementById('loopOutput').innerHTML = output;
});

// Session 6: Guess the Number Game
const secretNumber = Math.floor(Math.random() * 10) + 1;
document.getElementById('guessButton').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guessInput').value);
    let result;
    if (guess === secretNumber) {
        result = 'Congratulations! You guessed right!';
    } else if (guess < secretNumber) {
        result = 'Too low!';
    } else {
        result = 'Too high!';
    }
    document.getElementById('guessResult').textContent = result;
});

// Session 7: JavaScript Functions
document.getElementById('calculateButton').addEventListener('click', function() {
    const width = parseFloat(document.getElementById('widthInput').value);
    const height = parseFloat(document.getElementById('heightInput').value);
    const area = width * height;
    document.getElementById('areaResult').textContent = `Area: ${area}`;
});

// Session 8: JavaScript and Forms
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formMessage').textContent = 'Thank you for your submission!';
});

// Session 9: JavaScript Animations
document.getElementById('animateButton').addEventListener('click', function() {
    const box = document.getElementById('animationBox');
    box.style.transition = 'all 1s ease';
    box.style.transform = 'translateX(200px)';
    setTimeout(() => {
        box.style.transform = 'translateX(0)';
    }, 1000);
});

// Session 10: JavaScript Timers
document.getElementById('startClockButton').addEventListener('click', function() {
    setInterval(() => {
        const now = new Date();
        document.getElementById('clock').textContent = now.toLocaleTimeString();
    }, 1000);
});

// Session 11: JavaScript and APIs
document.getElementById('fetchJokeButton').addEventListener('click', function() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            document.getElementById('jokeDisplay').textContent = `${data.setup} - ${data.punchline}`;
        });
});
