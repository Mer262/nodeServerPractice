var http = require("http");
var PORT1 = 8090;
var PORT2 = 9000;

function handleRequestOne(request, response) {
    response.end("You're so amazing!!! You've landed at: " + request.url);
}

function handleRequestTwo(request, response) {
    response.end("You SUCK!!!! You've landed at: " + request.url);
}

var serverOne = http.createServer(handleRequestOne);
serverOne.listen(PORT1, function() {
    console.log("Server listening on: https://localhost:%s", PORT1);
});
var serverTwo = http.createServer(handleRequestTwo);
serverTwo.listen(PORT2, function() {
    console.log("Server listening on: https://localhost:%s", PORT2);
});