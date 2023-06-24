import data from "./input.json" assert { type: 'json' };

const lines = data.input.trim().split("\n");

/*
A = "rock"
B = "paper"
C = "scissors"
X = lose
Y = draw
Z = win
*/

let result = 0;

for (const line of lines) {
    result += battle(line);
}

console.log(result);

function battle(hands) {
    switch (hands) {
        case "A X":
            return 3;
        case "B Y":
            return 5;
        case "C Z":
            return 7;
        case "A Y":
            return 4;
        case "B Z":
            return 9;
        case "C X":
            return 2;
        case "A Z":
            return 8;
        case "B X":
            return 1;
        case "C Y":
            return 6;
    }
}