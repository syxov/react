import express from 'express';
import handleRender from './handleRender.jsx';

const server = express();
server.use(express.static('dist'));

server.get('/*', handleRender);
server.listen(9000);