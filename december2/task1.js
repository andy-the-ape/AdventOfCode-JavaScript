import data from "./input.json" assert { type: 'json' };

const lines = data.input.trim().split("\n");

/*
A = "rock"
B = "paper"
C = "scissors"
X = rock
Y = paper
Z = scissors
*/

let result = 0;

for (const line of lines) {
    result += battle(line);
}

console.log(result);

function battle(hands) {
    switch (hands) {
        case "A X":
            return 4;
        case "B Y":
            return 5;
        case "C Z":
            return 6;
        case "A Y":
            return 8;
        case "B Z":
            return 9;
        case "C X":
            return 7;
        case "A Z":
            return 3;
        case "B X":
            return 1;
        case "C Y":
            return 2;
    }

}