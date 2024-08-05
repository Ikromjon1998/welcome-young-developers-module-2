document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });
});

function checkAnswer(answer) {
    const feedback = document.getElementById('quiz-feedback');
    if (answer === 'a') {
        feedback.textContent = 'Correct! 🎉 The &lt;img&gt; tag is used to display images.';
    } else {
        feedback.textContent = 'Oops! Try again. 💡 The correct answer is &lt;img&gt;.';
    }
}
