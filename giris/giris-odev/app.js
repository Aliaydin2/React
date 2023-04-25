import axios from "axios";

async function getData (userId) {
 const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
 const {data:posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

const result = {...user, ...posts}
console.log(result)
}

export default getData;