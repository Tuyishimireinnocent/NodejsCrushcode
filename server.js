import http from 'http';
const server = http.createServer((req,res) => {
    //res.setHeader('Content-Type','text/plain' );
    //res.statusCode = 404;
    res.writeHead(500,{'Content-Type': 'application/json'})
    res.end(JSON.stringify({ message: 'Server Error'}));
});
const port = 8000;
server.listen(port,() => {
    console.log(`server running on port ${port}`)
})