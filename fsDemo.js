import { writeFile } from 'fs/promises';
import fs from 'fs/promises';

//import fs from 'fs';

/* readFile()- callback
fs.readFile('./test.txt','utf-8',(err,data)=>{
    if(err) throw err;
   // console.log(data);
});

// readFileSync() - Synchronous version
const data =  fs.readFileSync('./test.txt', 'utf8');
console.log(data);

// readFile() - promise.then()
fs.readFile('./test.txt','utf8')
.then((data) => console.log(data))
.catch((error) => console.log(error));
*/
async function readFile() {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);

    } catch (error) {
        console.log(error);

    }
}
//WriteFile


const WriteFile = async () => {
    try {
        await writeFile('./test.txt', 'hello, I am writing to this file');
        console.log('file written to...');
    } catch (error) {
        console.error(error);
    }
};

WriteFile(); 
readFile();

//appendfile()
const appendfile = async () => {
    try {
        await fs.appendFile('./test.txt' ,'\n This is Append text');
        console.log('file appended!');
    }catch{
        console.log(error)
    }
}

appendfile()