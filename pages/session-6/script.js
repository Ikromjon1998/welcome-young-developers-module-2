function calculateArea(length, width) {
    return length * width;
}

function showArea() {
    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;
    if (length > 0 && width > 0) {
        var area = calculateArea(length, width);
        document.getElementById("result").innerText = "The area is: " + area;
    } else {
        alert("Please enter positive numbers for length and width.");
    }
}

function checkAnswer(question, correctAnswer) {
    if (question === 1) {
        alert(correctAnswer === 'b' ? "Correct!" : "Try again!");
    } else if (question === 2) {
        alert(correctAnswer === 'c' ? "Correct!" : "Try again!");
    } else if (question === 3) {
        alert(correctAnswer === 'b' ? "Correct!" : "Try again!");
    }
}

function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

function showEnhancedResults() {
    var length = document.getElementById("enhanced-length").value;
    var width = document.getElementById("enhanced-width").value;
    if (length > 0 && width > 0) {
        var area = calculateArea(length, width);
        var perimeter = calculatePerimeter(length, width);
        document.getElementById("areaResult").innerText = "The area is: " + area;
        document.getElementById("perimeterResult").innerText = "The perimeter is: " + perimeter;
    } else {
        alert("Please enter positive numbers for length and width.");
    }
}
