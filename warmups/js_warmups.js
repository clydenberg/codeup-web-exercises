

//function to find the largest number in an array
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
    // console.log(result);
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

    // console.log(`Average Grade: ${averageGrade}`);
    // console.log(`Top Student: ${topStudent.name} (Grade: ${topStudent.grade})`);
})();




// Instructions: FIZZBUZZ
// 1. Write the FizzBuzz logic within the fizzBuzz function.
// 2. Use conditional statements and loops to determine if a number is divisible by 3, 5, or both.

// Function to implement FizzBuzz for a given range
const fizzBuzz = (start, end) => {
    //this is our validation statement
    if(typeof start === "boolean" || typeof end === "boolean"){
        return false;
    }
    parseFloat(start);
    parseFloat(end);
    if(isNaN(start)||isNaN(end)){
        return false;
    }
    //this is our happy path for when they feed valid arguments
    // Write your FizzBuzz logic here
    // Loop through numbers from start to end
    for(let i = start; i <= end; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(`fizzbuzz`);
            // Check if the current number is divisible by 5
            // console.log "Buzz" if it is divisible by 5
        }else if(i % 5 === 0){
            console.log(`buzz`);
            // Check if the current number is divisible by 3
            // console.log "Fizz" if it is divisible by 3
        } else if(i % 3 === 0){
            console.log(`fizz`);
            // If the number is not divisible by 3 or 5, console.log the number itself
        } else{
            console.log(i)
        }
    }
};

// Call the function to perform FizzBuzz for a specific range
//fizzBuzz(1, 100);

const findLongestWord = (sentence) =>{
    if(typeof sentence !== `string`){
        return false;
    }
    let arrSentence = sentence.split(` `);
    let longestWord ="";

    for(let word of arrSentence){
        if(word.length > longestWord.length ){
            longestWord = word;
        }
    }
    return longestWord;
}

// console.log(findLongestWord(`The quick brown fox jumped over the lazy dog`));

const students = [
    `Amanda`,
    `Bianca`,
    `Cameron`,
    `Chris`,
    `Dany`,
    `David`,
    `Diana`,
    `Drew`,
    `Evan`,
    `Hassan`,
    `Jack`,
    `Jason`,
    `John`,
    `Johnathan`,
    `Jordan`,
    `Joshua`,
    `Katie`,
    `Luis`,
]
const shuffle = (arr) =>{
    let shuffled;
    let i = arr.length
    let j;
        while(--i > 0){
            j = Math.floor(Math.random() * (i + 1));
            shuffled = arr[j];
            arr[j] = arr [i];
            arr[i] = shuffled;
        }
        return (arr);
}

const createPairs = (arr) =>{
    if(!Array.isArray(arr)){
        return false;
    }
    if(arr.length <= 2){
        return false;
    }
    arr = shuffle(arr);
    let studentPairs = [];

    while (arr.length > 0){
        let pair = [];
        let student1 = arr.pop();
        if(arr.length === 0){
            studentPairs[studentPairs.length - 1].push(student1);
        }else {
            pair.push(student1);
            let student2 = arr.pop();
            pair.push(student2);
            studentPairs.push(pair);
        }
    }
    console.log(studentPairs);
}

//createPairs(students);

const digitalRoot = (n) => {
    let digiroot;
    let numArray = n.toString().split(``);

    if(n <= 9){
        return n;
    }
    while(numArray.length > 1){
        digiroot = 0;
        for(let number of numArray){
            digiroot += parseFloat(number);
        }
        numArray = digiroot.toString().split(``);
    }
    digiroot = parseFloat(numArray.join(``));
    return digiroot;
}

//console.log(digitalRoot(651));

// const isPangram = (string) => {
//     let pangramPattern = /^(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z).*$/
//     let pangram = pangramPattern.test(string)
//     if(pangram){
//         console.log(`I am a pangram`);
//     }else{
//         console.log(`I'm not a pangram`);
//     }
// }
//
// isPangram(`abcdefghijklmnopqrstuvwxyz`);

const isPangram = (string) => {
    let alphabet = `abcdefghijklmnopqrstuvwxyz`.split(``);
    if(typeof string !== `string`){
        return false;
    }

    for(let letter of alphabet){
        if(!string.toLowerCase().includes(letter)){
            return false
        }
    }
    return true;
}