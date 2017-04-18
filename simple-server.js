var http = require('http');
var person = require('./person');


http.createServer( function (req, res) {
    
    console.log( JSON.stringify(req.headers))
    
    res.writeHead(200, {'Content-Type' : 'text/json'} )
    
//    res.end(
//        JSON.stringify({
//            user:'koen',
//            id:6 
//        })
//    )
    
res.end( JSON.stringify( person.i18l('nl') ) );
    
}).listen(8080);

console.log('test');