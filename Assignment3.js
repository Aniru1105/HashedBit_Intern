// Q1: Create an array of states in India. Remove names starting with vowels using array.filter
let states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Kerala", "Maharashtra", "Assam"];
let filteredStates = states.filter(state => !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase()));
console.log("Q1 Output:", filteredStates); // Output: ["Bihar", "Kerala", "Maharashtra"]

// Q2: Reverse the words in a sentence
let str = 'I love my India';
let reversed = str.split(' ').reverse().join(' ');
console.log("Q2 Output:", reversed); // Output: "India my love I"

// Q3: Replace 'INDIA' with 'INDONESIA' using array.splice
let arr = ['I', 'N', 'D', 'I', 'A'];
arr.splice(1, 4, 'N', 'D', 'O', 'N', 'E', 'S', 'I', 'A');
console.log("Q3 Output:", arr.join('')); // Output: "INDONESIA"

// Q4: Count vowels and consonants in a string
let text = "JavaScript is a powerful language";
let vowels = text.match(/[aeiou]/gi)?.length || 0;
let consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
console.log("Q4 Output: Vowels =", vowels, ", Consonants =", consonants);
// Output: Vowels = 11 , Consonants = 18

// Q5: Replace wrong word with correct word in a sentence
function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}
console.log("Q5 Output:", correctfn("I like JavaaScript", "JavaaScript", "JavaScript")); 
// Output: "I like JavaScript"

// Q6: Filter numbers > 5 from an array
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let result = inputArr.filter(num => num > 5);
console.log("Q6 Output:", result); // Output: [9, 10, 7]

// Q7: Calculate average scores of students using map and reduce
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];
let averages = students.map(student => {
  let avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
  return { name: student.name, average: avg };
});
console.log("Q7 Output:", averages);
// Output:
// [
//   { name: 'Ram', average: 70 },
//   { name: 'Mohan', average: 80 },
//   { name: 'Sai', average: 70 },
//   { name: 'Hemang', average: 85 }
// ]

// Q8: Repeated sum of digits until one digit
function digitSum(num) {
    while (num > 9) {
        num = num.toString().split('').reduce((a, b) => a + +b, 0);
    }
    return num;
}
console.log("Q8 Output:", digitSum(456)); // Output: 6

// Q9: Count number of words in a paragraph
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}
console.log("Q9 Output:", countWords("This is a sample paragraph with several words.")); 
// Output: 8

// Q10: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Q10 Output:", reverseString("Hello")); // Output: "olleH"

// Q11: Calculate average score for each student from subject marks
let data = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

let averageResult = Object.entries(data).map(([student, subjects]) => {
    let values = Object.values(subjects);
    let avg = values.reduce((a, b) => a + b, 0) / values.length;
    return { [student]: { average: avg } };
});
console.log("Q11 Output:", averageResult);
// Output:
// [
//   { student1: { average: 64.2 } },
//   { student2: { average: 64.2 } },
//   { student3: { average: 64.2 } }
