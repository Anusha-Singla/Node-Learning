===========Node Js===========
1. Introduction 
2. Installation
3. Prerequisites for Node Js
  --> Basic Js
  --> ES5 & ES6
  --> Client Server Model
4. REPL 
 --> Read - Read the user's input & parse the input into js    
 --> Eval - Takes & evaluates.
 --> Print - Prints the result.
 --> Loop - Loop the command until user presses Ctrl+C twice.
5. Core Modules --> how to require built-in libraries.
6. Synchronous Fs --> fs.readFileSync, fs.writeFileSync, fs.unlinkSync, etc..
7. Asynchronous Fs --> fs.readFile, fs.writeFile, fs.unlink, etc..
8. Synchronous vs Asynchronous
9. CRUD for Fs in Asynchronous coding
10. Get the info of OS using Node --> os.arch(), os.fremem(), os.totalmem(), etc,..
11. Path Module in Node --> path.dirname(), path.extname(), path,parse(),...
12. Create & Export user defined modules --> module.exports = module_name;
13. Importing & Using Node Modules --> Chalk, Validator
14. Global NPM Modules --> Nodemon(automatically restarting)
15. Module Wrapper Function --> Grooping Operator, IIFE(protected inside this)
16. Creating Own Server --> http.createServer((req, res)=>{});
  --> req = used to get info about current request
  --> res = used to send response from current Server
  --> listen = to listen the port no.
17. Handle HTTP request & Routing --> Status code, res.writeHead(status_code);
18. JSON data -->  JSON.stringify & JSon.parse 
19. Create API & display JSON 
20. Events Module --> created class with the help of events, created an instance of it, on it & then emit it.
21. Streams & Buffer --> Read, Write (data, end, error, finish)
22. Stream Pipe --> stream.pipe()
24. Dynamic Quotes Website
===============================================================
------------------------- Express JS --------------------------
25. Initialization of Express, require module, create app, app.get(route, callback), res.send(), app.listen()
26. Routing
27. Send HTML/Json on response --> res.send(), res.json(), res.write();
28. Serve Static HTML/Css/Js files to express --> app.use(express.static(staticPath));
29. 