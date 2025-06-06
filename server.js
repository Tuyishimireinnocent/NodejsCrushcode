import { error } from 'console';
import http from 'http';
import fs  from 'fs/promises';
import url from 'url';
import path from 'path';
//get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename,__dirname);
//import dotenv from 'dotenv'

const server = http.createServer(async (req,res) => {
    //res.setHeader('Content-Type','text/plain' );
    //res.statusCode = 404;
    try {

        if(req.method === 'GET'){
             let filePath;

         if(req.url === '/'){
    
       filePath = path.join(__dirname,'public', 'index.html');

    } else if(req.url === '/about'){

    filePath = path.join(__dirname,'public', 'about.html');
        
    }else{
  
      throw new error('not found');
    }
    const data = await fs.readFile(filePath)
    res.setHeader('Content-Type','text/html');
    res.write(data);
    res.end();


        } else{

            throw new error('Method not allowed')
        }
        
    } catch (error) {
    res.writeHead(500,{'Content-Type': 'text/plain'})
    res.end ('Server Error');
        
    }
    

    
});
const port = process.env.PORT;
server.listen(port,() => {
    console.log(`server running on port ${port}`)
})