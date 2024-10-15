let numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);

let strings = ["перший", "другий", "третій"];
strings.push("четвертий");
console.log(strings); 

let numArray = [4, 6, 8];
let sum = numArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
let fiveNumbers = [1, 2, 3, 4, 5];
for (let i = 0; i < fiveNumbers.length; i++) {
    console.log(fiveNumbers[i]);
}

let fiveStrings = ["короткий", "досить довгий", "рядок", "довгий рядок", "ще один"];
for (let i = 0; i < fiveStrings.length; i++) {
    if (fiveStrings[i].length > 5) {
        console.log(fiveStrings[i]);
    }
}

let tenNumbers = [5, 9, 2, 14, 28, 17, 33, 6, 45, 12];
let max = Math.max(...tenNumbers);
console.log(max); // 45

let tenNumbersArray = [5, 9, 2, 14, 28, 17, 33, 6, 45, 12];
for (let i = 0; i < tenNumbersArray.length; i++) {
    if (tenNumbersArray[i] % 2 === 0) {
        console.log(tenNumbersArray[i]);
    }
}
