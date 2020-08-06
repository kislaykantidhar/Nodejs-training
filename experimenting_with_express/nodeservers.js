const http =require('http');


const server=http.createServer((req,res)=>{
    console.log(req);
    //start-line
    //header
    //body
    res.writeHead(200,{'content-type':'text/html'});//status code in the header
    res.write('<h1>tell me its working</h1>');
    res.end();//so the browser is not left hanging

})

server.listen(5252);

// curl -v localhost:5252
// *   Trying 127.0.0.1:5252...
// * TCP_NODELAY set
// * Connected to localhost (127.0.0.1) port 5252 (#0)
// > GET / HTTP/1.1
// > Host: localhost:5252
// > User-Agent: curl/7.68.0
// > Accept: */*
// > 
// * Mark bundle as not supporting multiuse
// < HTTP/1.1 200 OK
// < content-type: text/html
// < Date: Thu, 06 Aug 2020 09:14:24 GMT
// < Connection: keep-alive
// < Transfer-Encoding: chunked
// < 
// * Connection #0 to host localhost left intact
// <h1>tell me its working</h1>