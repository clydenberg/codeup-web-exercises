
const findLargestNumber = (numbers) => {
        let largestNum = [0];
        if(Array.isArray(numbers) && numbers.length === 0){
            return false;
        }else {
            for(const number of numbers){
                if(largestNum < number) {
                    largestNum = number;
                }
            }
        }
        return largestNum;
};

(()=> {
    const numbers = [42,17,8,94,23,61,12,51,6];
    const result = findLargestNumber(numbers);
    console.log(result);
})();

// Function to calculate the average grade of the students
const calculateAverageGrade = (studentList) => {
    let classAverage;
    let sum = 0;
    for(let student of studentList){
        sum += student.grade;
    }
    classAverage = sum / studentList.length;
    return classAverage;
};

// Function to find the student with the highest grade
const findTopStudent = (studentList) => {
    let topStudent = studentList[0];
    for(let student of studentList){
        if(student.grade > topStudent.grade){
            topStudent = student;
        }
    }
    return topStudent;
};

//IIFE / Main
(() => {
    // Array of student objects
    const students = [
        { id: 1, name: "Alice", grade: 90 },
        { id: 2, name: "Bob", grade: 85 },
        { id: 3, name: "Charlie", grade: 78 },
        { id: 4, name: "David", grade: 92 },
        { id: 5, name: "Eva", grade: 88 },
    ];
    // Display the average grade and the top student
    const averageGrade = calculateAverageGrade(students);
    const topStudent = findTopStudent(students);

    console.log(`Average Grade: ${averageGrade}`);
    console.log(`Top Student: ${topStudent.name} (Grade: ${topStudent.grade})`);
})();

// Instructions:
// 1. Write the FizzBuzz logic within the fizzBuzz function.
// 2. Use conditional statements and loops to determine if a number is divisible by 3, 5, or both.

// Function to implement FizzBuzz for a given range
const fizzBuzz = (start, end) => {
    // Write your FizzBuzz logic here
    // Loop through numbers from start to end
    for(let i = start; i <= end; i++){
        if(i / 3 && i / 5){
            console.log(`fizzbuzz`);
            // Check if the current number is divisible by 5
            // console.log "Buzz" if it is divisible by 5
        }else if(i / 5){
            console.log(`buzz`);
            // Check if the current number is divisible by 3
            // console.log "Fizz" if it is divisible by 3
        } else if(i / 3){
            console.log(`fizz`);
            // If the number is not divisible by 3 or 5, console.log the number itself
        } else{
            console.log(i)
        }
    }
};

// Call the function to perform FizzBuzz for a specific range
fizzBuzz(1, 100);
