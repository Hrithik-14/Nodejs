
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

const fs = require("node8")






