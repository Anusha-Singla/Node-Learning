const fs = require('fs');
const http = require('http');

const server = http.createServer();
server.on("request", (req, res) => {
    const rstream = fs.createReadStream("inputs.txt");
    
    // console.log("rsream is", rstream);
    // rstream.on("data", (chunkdata) => {
    //     res.write(chunkdata);
    // });
    // rstream.on("end", () => {
    // });
    // rstream.on("error", (err) => {
    //     console.log("error is", err);
    //     res.end("File not found");
    // });

    rstream.pipe(res);
});

server.listen(8080, () => {
    console.log("Server is listening to port 8080");
});