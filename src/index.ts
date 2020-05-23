import * as http from 'http';
import debug from 'debug';

import  App from './App';

debug('ts-express:server');

const port=9001
App.set('port', port);

const server = http.createServer(App);
server.listen(port);

server.on('listening',()=>{
    console.log("Server start to listening port "+port)
})