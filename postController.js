const Posts = [

    {id:1,title: 'post one'},
    {id:2,title: 'post Two'},
    {id:3,title: 'post Three'},
    {id:4,title: 'post Four'},
];

//export const getPosts = () => Posts; 

//const getPosts = () => Posts;   export {getPosts}

const getPosts = () => Posts; 
export const getPostsLength = () => Posts.length;

export default getPosts;
