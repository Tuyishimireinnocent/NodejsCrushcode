import crypto from 'crypto';

/*
//createHash()
const hash = crypto.createHash('sha256');
hash.update('chaba');
//console.log(hash.digest('hex'));

crypto.randomBytes(16,(err,buf)=>{
if(err) throw err;

//console.log(buf.toString('hex'));
})

*/
//createcipheriv & createDecipheriv
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm,key,iv);
let encyrpted = cipher.update('Hello,This chaba boi','utf-8','hex');
encyrpted += cipher.final('hex');
console.log(encyrpted);



const decipher = crypto.createDecipheriv(algorithm,key,iv);
let decyrpted = decipher.update( encyrpted,'hex','utf8');
decyrpted += decipher.final('utf8');
console.log(decyrpted);