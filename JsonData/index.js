const fs = require("fs");

const details = {
    name: "Vishal Kashyap",
    age: "21",
    course: "MBA"
}

const data = JSON.stringify(details);
// fs.writeFile("storedJson.json", data, ()=>{
//     console.log("File created")
// });
fs.readFile("storedJson.json", "utf-8",()=>{
    const parsedData = JSON.parse(data);
    console.log(parsedData);
});
