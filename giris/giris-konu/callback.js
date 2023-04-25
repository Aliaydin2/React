import fetch from "node-fetch"
import axios from "axios"

// async function getData() {
//     const users = await (
//         await fetch ("https://jsonplaceholder.typicode.com/users")
//     ).json();
//     console.log(users)
// }
// getData();

// ***********
// async function getData() {
//     const users = await ( axios ("https://jsonplaceholder.typicode.com/users")
//     );
//     console.log(users)
// }
// getData();

// const getComments = () => {
//     return new Promise((resolve,reject) => {
//         resolve("comments");
//     })
// }

// getComments()
// .then((data)=>console.log(data))

// **************

const getUsers = () => {
    return new Promise(async(resolve,reject)=>{
    const {data} =await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
    // reject("Bir sorun oluştu!");
    })
}
const getPost = (post_id) => {
    return new Promise(async(resolve,reject)=>{
    const {data} =await axios("https://jsonplaceholder.typicode.com/posts/" +post_id);
    resolve(data);
    // reject("Bir sorun daha oluştu!");
    })
}

(async()=>{
    try{
        const users=await getUsers();
        const post=await getPost(1);

        console.log(users)
        console.log(post)
    } catch(e){
        console.log(e)
    }
})()