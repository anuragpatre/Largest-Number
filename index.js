// Program to find the largest number from the array

const marks = [88, 56, 36, 45, 81, 19, 66, 95, 98, 73]
let largest = marks[0]

for (const num of marks) {

    if (num > largest) {
        largest = num
    }
}
console.log(largest);


