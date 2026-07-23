// non-blockable I/O program


//promise makes a function aynchronous
function register(){
    return new Promise((resolve, reject) =>{

        //setTimeout to only show delay in work
        setTimeout( () =>{
            resolve();
        console.log("register here");
        },5000)
    })
}

function login(){
   return new Promise((resolve,reject) =>{
     setTimeout( () =>{
        reject();
        console.log("login here");
    },6000)
   })
   
}
function getData(cb){
    return new Promise((resolve,reject)=>{
        setTimeout( () =>{
        resolve();
         console.log("fetch data");
    },7000)
    })
}

function displayData(){
    return new Promise((resolve,reject)=>{
        setTimeout( () =>{
            resolve();
          console.log("display data");
    },3000)
    })
}


// register().then(login)
//           .then(getData)
//           .then(displayData)
//           .catch((err)=>{
//             console.log("error caught :- ",er);
            
//           })

async function test(){
    try{
        await register();
        await login();
        await getData();
        await displayData();

    }
    catch(err){
        console.log("error caught :- ",err);
        
    }
}

test();

console.log("call another App");

