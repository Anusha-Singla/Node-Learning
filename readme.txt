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
