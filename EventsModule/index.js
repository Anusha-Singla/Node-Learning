const EventEmitter = require("events");
const event = new EventEmitter();

// event.on("Add", ()=>{
//     console.log(2+5);
// });
// event.on("Add", ()=>{
//     console.log(3+4);
// });
// event.emit("Add");

event.on("checkPage", (sc, type)=>{
    console.log(`Status code is - ${sc} & Status type is - ${type}`);
});
event.emit("checkPage", 200, "ok");

