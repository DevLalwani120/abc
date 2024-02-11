const http=require('http');
var port=3000;
http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(`<h1>Server created SuccessFully</h1>
    <h2>HELLO WORLD</h2>`)
    res.end()
}).listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`)
});