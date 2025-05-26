import url from 'url';


const urlstring = 'https://www.google.com/search?q=hello+world';
//url object
const urlobj = new URL(urlstring);
console.log(urlobj.pathname);

//format()
//console.log(url.format(urlobj));
//import.meta.url - file URL
console.log(import.meta.url);

//fileURLtopath
console.log(url.fileURLToPath(import.meta.url));
 
console.log(urlobj.search);

const params = new URLSearchParams(urlobj.search);
console.log(params);
console.log(params.get('q'));
params.append('limit','5');
params.delete('limit');
console.log(params);