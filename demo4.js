const student = {
    name : "Akshat",
    branch : "CSEAIML",
    age : 34
}

const new_student = {...student,
    address :
    {
        street1 : "sector-15",
        city : "Noida",
        pincode : "201001"
    }
}

console.log("student = ",student);
console.log("new student = ",new_student);



