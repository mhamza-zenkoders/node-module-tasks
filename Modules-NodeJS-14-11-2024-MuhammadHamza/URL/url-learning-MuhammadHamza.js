const url = require("url");

const myURL = new URL("https://example.com:8080/path/page?id=101&name=Hamza&age=24");

// Access parts of the URL
console.log("Protocol:", myURL.protocol); // https:
console.log("Hostname:", myURL.hostname); // example.com
console.log("Port:", myURL.port); // 8080
console.log("Pathname:", myURL.pathname); // /path/page

console.log("ID:", myURL.searchParams.get("id")) //101
console.log("Name:", myURL.searchParams.get("name")); //Hamza
console.log("Age:", myURL.searchParams.get("age")); //24

// Format URL
myURL.pathname = "/newPath";
myURL.searchParams.set("id", "301");
myURL.searchParams.set("name", "OptimusPrime");
myURL.searchParams.set("age", "135");

console.log("Updated URL:", myURL.toString());
console.log("ID:", myURL.searchParams.get("id")) //101
console.log("Name:", myURL.searchParams.get("name")); //Hamza
console.log("Age:", myURL.searchParams.get("age")); //24
