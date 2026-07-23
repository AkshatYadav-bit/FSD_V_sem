// non-blockable I/O program

function register(cb){
    setTimeout( () =>{
        console.log("register here");
        cb();
    },5000)
}

function login(cb){
    setTimeout( () =>{
         console.log("login here");
         cb();
    },6000)
   
}
function getData(cb){
      setTimeout( () =>{
         console.log("fetch data");
         cb();
    },7000)
}

function displayData(){
      setTimeout( () =>{
          console.log("display data");
    },3000)
}

register();
login();
getData();
displayData();

console.log("call another App");

