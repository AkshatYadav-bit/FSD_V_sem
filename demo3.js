const sum = (...arr) =>{
    // return arr.reduce((a,b) => a+b)
    let s = 0;
    for( i of arr){
        s = s + i;
    }
    return s;
}

console.log(sum(3,4,5));
