let name = prompt("Enter your name:");
if(name) {
    alert("Hello, " + name + "!");
} else {
    alert("You didn't enter your name.");
}

function addNumbers(a, b) {
    return a + b;
}
let sum = addNumbers(2, 3);
console.log("Sum of 2 and 3 is " + sum);

for(let i = 1; i <= 5; i++) {
    console.log("Number " + i);
}

document.body.innerHTML += "<p id='demo'>This is a paragraph.</p>";
document.getElementById('demo').textContent = "Text changed by JavaScript!";
