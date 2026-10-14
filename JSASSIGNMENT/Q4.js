let marks = [90, 85, 88, 92, 80];
let total = 0;
let detained = false;

for (let mark of marks) {
    total += mark;
    if (mark < 35) {
        detained = true;
    }
}

let average = total / marks.length;
let percentage = (total / 500) * 100;

console.log("Average:", average);
console.log("Percentage:", percentage + "%");

if (detained || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
