function checkNumber() {
    const number = document.getElementById('numberInput').value;
    const result = document.getElementById('result');
    if (isPerfectNumber(number)) {
        result.textContent = number + ' er et perfekt nummer!';
        result.style.color = 'green';
    } else {
        result.textContent = number + ' er ikke et perfekt nummer.';
        result.style.color = 'red';
    }
}

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum == num && num != 0;
}

function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * 100);
    document.getElementById('numberInput').value = randomNum;
    checkNumber();
}

function setColor() {
    const color = document.getElementById('colorInput').value;
    document.body.style.backgroundColor = color;
}

function setColorPicker() {
    const color = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = color;
}

function randomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

function setRGBColor() {
    const r = document.getElementById('redSlider').value;
    const g = document.getElementById('greenSlider').value;
    const b = document.getElementById('blueSlider').value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
