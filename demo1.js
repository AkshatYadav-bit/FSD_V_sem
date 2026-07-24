const num = [1,2,3,4,5];
// const b = num[0];
// const c = num[1];
const [b,c] = num; // destructuring of the array
console.log("b = ",b);
console.log("c = ",c);
const student = {
    name : "Akshat",
    age : 40,
    branch : "AIML"
}

// const name = student.name;
// const age = student.age;
// const branch = student.branch;

const {name,age,branch} = student;
console.log("name = ",name);
console.log("age = ",age);
console.log("branch = ",branch);




