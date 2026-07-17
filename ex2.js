const arr = [1,2,3,4,5,6,7,8,9];
const brr = arr.filter((i)=>(i%2==0));
console.log("even = ",brr);

const c = brr.map((i) => i*i);
console.log("square = ",c);

const d= c.reduce((i,s) => s+i)
console.log("sum of square = " + d);


