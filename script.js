const form = document.querySelector('form');
const result = document.querySelector('.result');
const weightRange = document.querySelector('#weight');
const weightValue = document.querySelector('#weight-value');
const heightRange = document.querySelector('#height');
const heightValue = document.querySelector('#height-value');
const weightEmoji = document.querySelector('#weight .emoji');
const heightEmoji = document.querySelector('#height .emoji');

weightRange.addEventListener('input', function() {
    weightValue.textContent = weightRange.value;
    addEmoji(weightRange.value, weightEmoji);
});

heightRange.addEventListener('input', function() {
    heightValue.textContent = heightRange.value;
    addEmoji(heightRange.value, heightEmoji);
});

function addEmoji(value, emojiContainer) {
    let emoji = '';

    if (emojiContainer === weightEmoji) {
        if (value < 60) {
            emoji = '🍗';
        } else if (value >= 60 && value < 90) {
            emoji = '🥩';
        } else {
            emoji = '🍔';
        }
    } else if (emojiContainer === heightEmoji) {
        if (value < 150) {
            emoji = '🧍‍♀️';
        } else if (value >= 150 && value < 180) {
            emoji = '🚶‍♀️';
        } else {
            emoji = '🏃‍♀️';
        }
    }

    emojiContainer.textContent = emoji;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = Number(weightRange.value);
    const height = Number(heightRange.value) / 100;
    const bmi = weight / (height * height);
    const bmiRounded = Math.round(bmi * 10) / 10;

    result.textContent = `Your BMI is ${bmiRounded}.`;

    if (bmi < 18.5) {
        result.textContent += ' You are underweight.';
    } else if (bmi >= 18.5 && bmi < 25) {
        result.textContent += ' You have a normal weight.';
    } else if (bmi >= 25 && bmi < 30) {
        result.textContent += ' You are overweight.';
    } else if (bmi >= 30 && bmi < 35) {
        result.textContent += ' You are obese (class I).';
    } else if (bmi >= 35 && bmi < 40) {
        result.textContent += ' You are obese (class II).';
    } else {
        result.textContent += ' You are obese (class III).';
    }

    addEmoji(weightRange.value, weightEmoji);
    addEmoji(heightRange.value, heightEmoji);
});