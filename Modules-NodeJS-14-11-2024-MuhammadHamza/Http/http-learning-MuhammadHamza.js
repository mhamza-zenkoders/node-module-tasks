const http = require("http");

const server = http.createServer((req, res) => {
  // Handle /success route
  if (req.url === '/success') {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Request Successful");
  }
  // Handle /not-found route
  else if (req.url === "/not-found") {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Resource not found.");
  }
  // Handle any other route (bad request)
  else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.write("Bad request.");
  }
  
  res.end(); // End the response
});

// Start the server on port 8000
server.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
