import http from 'node:http';

const server = http.createServer((req,res) => {
  const { method, url } = req;

  if(method === 'GET' && url === '/users'){
    // Early return
    return res.end('Listagem de usuários');
  }
  
  if(method === 'POST' && url === '/users') {
    return res.end('Criação de usuário');
  }
  
  console.log(method, url);

  return res.end('Hello World')
})

server.listen(3333)  