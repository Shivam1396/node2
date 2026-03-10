let express=require("express");
let fs=require("fs");
let app=express();
let port=3003;

let write=fs.readFileSync("./write.txt","utf8");
fs.readFileSync("./write.txt", "utf8");

let append=fs.appendFileSync("./write.txt","\nSynchronous and asynchronous programming both have many real-life applications. In synchronous systems, tasks are performed one after another and each step must finish before the next begins. For example, an ATM transaction follows a synchronous process where the user inserts the card, enters the PIN, the system verifies the PIN, and then allows the withdrawal. Each step must be completed before moving to the next step. Similarly, online form submission and payment verification also work synchronously because the system must validate the information before storing data or completing the payment.On the other hand, asynchronous systems allow tasks to run in the background without stopping the main process. For example, in a food delivery application, once a user places an order, the restaurant prepares the food while the user can continue using the app or doing other activities. Another example is social media notifications, where messages or alerts appear while the user is browsing the platform. Similarly, file uploads and email sending happen asynchronously because the process continues in the background while the user performs other tasks. Therefore, synchronous programming is useful when tasks must occur in sequence, while asynchronous programming is more efficient for operations that take time and should not block the main program.");

let read=fs.readFileSync("./write.txt","utf8");

app.get("/home", (req, res) => {
  res.send(write);  
})

app.get("/about", (req, res) => {
  res.send(read);
})  

app.listen(port,() => {
  console.log(`server is running on port ${port}`);
});

//git commit

//This program is a simple web server application built using Node.js, Express, and the File System (fs) module. The purpose of the program is to demonstrate how synchronous file operations work in a server environment. In the beginning, the required modules express and fs are imported. The Express framework is used to create the server, while the File System module is used to perform file operations such as reading and appending data. An Express application is created and configured to run on port 3003, which allows the server to listen for incoming HTTP requests from a client such as a web browser.The program first reads the content of the file write.txt using the readFileSync() method. This method reads the file synchronously, meaning the program waits until the file is completely read before moving to the next step. The original content of the file is stored in the variable write. After that, the program uses appendFileSync() to add a new paragraph to the end of the file. This operation is also synchronous, so the execution of the program pauses until the new content is successfully appended. Once the new text is added, the file is read again using readFileSync(), and the updated content is stored in another variable called read.The server then defines two routes using Express. When a user visits the /home route in the browser, the server sends the original file content stored in the write variable. When the user visits the /about route, the server sends the updated file content stored in the read variable, which includes the newly appended paragraph. This demonstrates how the server interacts with the file system and sends different responses based on the request. The architecture of this application follows a simple client-server model, where the client (web browser) sends a request, the Express server processes it, performs the required file operations, and then sends the response back to the client. Finally, the server starts listening on port 3003 using the app.listen() method, making the application accessible through a web browser. This program clearly illustrates how synchronous file handling works in Node.js and how it can be integrated with a web server to deliver dynamic content.