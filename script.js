const greetBtn = document.getElementById('greetBtn');
greetBtn.addEventListener('click', function() {
    const name = document.getElementById('userName').value;
    if(name) {
        document.getElementById('greetOutput').textContent = `Hello, ${name}! Welcome to JavaScript.`;
    } else {
        document.getElementById('greetOutput').textContent = 'Please enter your name.';
    }
});

function sumNumbers(a, b) {
    return a + b;
}

const calcBtn = document.getElementById('calcBtn');
calcBtn.addEventListener('click', function() {
    const result = sumNumbers(5, 10); // example numbers
    document.getElementById('sumOutput').textContent = `Sum of 5 and 10 is ${result}`;
});

// Another function: toggle visibility
function toggleVisibility(elementId) {
    const el = document.getElementById(elementId);
    if(el.style.display === 'none') {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
}

const loopBtn = document.getElementById('loopBtn');
loopBtn.addEventListener('click', function() {
    let output = '';
    for(let i = 1; i <= 5; i++) {
        output += i + ' ';
    }
    document.getElementById('loopOutput').textContent = output;
});


let count = 1;
while(count <= 3) {
    console.log('Count is: ' + count);
    count++;
}


document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('greetOutput').textContent = 'Text has been changed!';
});

document.getElementById('addItemBtn').addEventListener('click', function() {
    const li = document.createElement('li');
    li.textContent = 'New Item';
    document.getElementById('myList').appendChild(li);
});

document.getElementById('greetOutput').addEventListener('click', function() {
    toggleVisibility('greetOutput');
});
