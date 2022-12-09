const {server, port} = require("./src/server");

server.listen(port, ()=> {
    console.log(`API is running at ${port}`);
})