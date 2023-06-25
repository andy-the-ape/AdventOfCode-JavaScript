import data from "./input.json" assert {type: 'json'};


const CHARVALUEARRAY = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
    ['i', 9],
    ['j', 10],
    ['k', 11],
    ['l', 12],
    ['m', 13],
    ['n', 14],
    ['o', 15],
    ['p', 16],
    ['q', 17],
    ['r', 18],
    ['s', 19],
    ['t', 20],
    ['u', 21],
    ['v', 22],
    ['w', 23],
    ['x', 24],
    ['y', 25],
    ['z', 26],
    ['A', 27],
    ['B', 28],
    ['C', 29],
    ['D', 30],
    ['E', 31],
    ['F', 32],
    ['G', 33],
    ['H', 34],
    ['I', 35],
    ['J', 36],
    ['K', 37],
    ['L', 38],
    ['M', 39],
    ['N', 40],
    ['O', 41],
    ['P', 42],
    ['Q', 43],
    ['R', 44],
    ['S', 45],
    ['T', 46],
    ['U', 47],
    ['V', 48],
    ['W', 49],
    ['X', 50],
    ['Y', 51],
    ['Z', 52]
    ]);

let priorityValueSum = 0;

// create array where each index holds 1 line (ie. 2 ruckacks).
const lineArray = data.input.trim().split("\n");

// split each line into 2 separate rucksacks (of equal length) and put in new arrays
const rucksack1Array = [];
const rucksack2Array = [];
for (const line of lineArray) {

    // first half of line String
    let firstHalfString = "";
    for (let i = 0; i<line.length/2; i++) {
        firstHalfString += line[i];
    }
    rucksack1Array.push(firstHalfString);
    console.log(firstHalfString);
    // second half of the line String
    let secondHalfString = "";
    for (let j = line.length/2; j<line.length-1; j++) {
        secondHalfString += line[j];
    }
    rucksack2Array.push(secondHalfString);
    console.log(secondHalfString);
}


for (let i = 0; i<lineArray.length; i++) {
    let commonChar = findCommonChars(rucksack1Array[i], rucksack2Array[i]);
    console.log(commonChar);
    if (commonChar !== undefined) {
        priorityValueSum += CHARVALUEARRAY.get(commonChar);
        console.log(priorityValueSum);
    }
}
function findCommonChars(rucksackString1, rucksackString2) {
    // iterate over rucksackString1 and check each char against rucksackString2
    // and return common chars
    for (let i = 0; i<rucksackString1.length; i++) {
        for (let j = 0; j<rucksackString2.length; j++) {
            if (rucksackString1[i] === rucksackString2[j]) {
                return rucksackString1[i];
            }
        }
    }
}
