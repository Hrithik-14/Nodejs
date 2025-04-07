
// const http = require("http")

// const sever = http.createServer((req,res) => {
    
//     const url = req.url;

//     res.setHeader('Content-Type', 'text/html');

//     if(url === '/') {
//         res.write('<h1>Home Page</h1>');
//         res.write('<p>Welcome to the Home Page!</p>');
//     } else if (url === '/about'){
//         res.write('<h1>About Page</h1>');
//         res.write('<p>Welcome to the About Page!</p>');
//     } else if (url === '/contact'){
//         res.write('<h1>Contact Page</h1>');
//         res.write('<p>Welcome to the Contact Page!</p>');
//     } else {
        
//         res.write('<h1>404 Not Found</h1>');
//         res.write('<p>This page you are looking for does not exist</p>');
        

//     }
//     res.end()

// })

// sever.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
    
// })

// const addFn = require('./add')

// console.log("Hello From index.js");

// const sum = addFn(1,2)
// const sum2 = addFn(2,3)
// console.log(sum);
// console.log(sum2);

// require("./batman")
// require("./superman")

// const fs = require("node8")


// // var hey = "hello"
// // var hello = 1
// // var hey = true
// // let how = 2
// // const are = false
// // let you = "fine"
// // console.log(hey,hello);



// if(a>10){
//     console.log("hey");
    
// }else if(a<10){
//     console.log("no");
    
// }else{
//     console.log("yes");
    
// }
// let a = 10
// switch (a) {
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;
//     case 9:
//         console.log("9");
//        break;

//     default:
//         console.log("default");
        
//         break;
// }

// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//     console.log("server is running on port 8080");
    
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080



// function addEvent(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             var i = 0;
//             while(i < 10000000){
//                 i++
//             }
//             if(i === 12552515){
//                 resolve("")
//             }
//         })
//     })
// }

const http = require('http')

const port = 3000
const server = http.createServer(function(error) {
})

server.listen(port, function(error){
    if (error) {
        console.log('Something went wrong',error);
        
    } else {
        console.log('server is listening' + port);
        
    }
})



