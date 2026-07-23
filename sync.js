// blockable I/O program

function register(){
    waitForInput(5000);
    console.log("register here");
}

function login(){
    waitForInput(6000);
    console.log("login here");
}
function getData(){
     waitForInput(8000);
    console.log("fetch data");
}

function displayData(){
      waitForInput(9000);
    console.log("display data");
}

function waitForInput(delay){
    const ct = Date.now();
    const ms = ct + delay;
    while( Date.now() < ms){

    }
}

register();
login();
getData();
displayData();
console.log("call another App");

