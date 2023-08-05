const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>welcome to ouer home page</h1>");
  }
  if (req.url === "/about") {
    console.log("Here is our short history");
  }
  res.end(`
   <h1>Opps!!</h1>
   <p>We can't see your page you are find the page</p>
   <a href="/">Back Home</a>`);
});
server.listen(5000);
