import data from "./input.json" assert { type: 'json' };

const lines = data.input.trim().split('\n');

for (const line of lines) {
    console.log(line);
}

const numberArray = [];
let sum = 0;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line === "") {
        numberArray.push(sum);
        sum = 0;
        continue;
    }
    sum += Number(line);
}
numberArray.sort();

for (const number of numberArray) {
    console.log(number);
}
