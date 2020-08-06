const http=require('http');
const fs=require('fs');

const server = http.createServer((req,res)=>{
    if(req.url=='/')
    {

    res.writeHead(200,'content-type:text/html');
    const gaga=fs.readFileSync('page1.html');
    res.write(gaga);
    res.end();
    }
    else if(req.url=='/maroon5')
    {
        res.writeHead(200,'content-type:text/html');
        res.write("<h1>Moves like jagger</h1>");
        res.end();
    }  
    else
    {
        res.writeHead(404,'content-type:text/html');
        res.write("<h1>noooooooooooh</h1>");
        res.end();
        // *   Trying 127.0.0.1:5252...
        // * TCP_NODELAY set
        // * Connected to localhost (127.0.0.1) port 5252 (#0)
        // > GET /nothing HTTP/1.1
        // > Host: localhost:5252
        // > User-Agent: curl/7.68.0
        // > Accept: */*
        // > 
        // * Mark bundle as not supporting multiuse
        // < HTTP/1.1 404 content-type:text/html
        // < Date: Thu, 06 Aug 2020 09:35:56 GMT
        // < Connection: keep-alive
        // < Transfer-Encoding: chunked
        // < 
        // * Connection #0 to host localhost left intact
        // <h1>noooooooooooh</h1>
    }

})

server.listen(5252);