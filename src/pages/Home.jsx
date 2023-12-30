import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
function Home() {

    const [posts, setPosts] = useState([])

    useEffect(() =>{
        appwriteService.getPosts().then((posts) => {
    if(posts){
        setPosts(posts.documents)
    }
})
},[])

if(posts.length === 0){
    return(
        <div className='w-full py-8 mt-4 text-center'>
        <Container>
        <div className=' flex flex-wrap'>
        <div className=' py-2 w-full'>
        <h1 className=' text-4xl font-bold hover:text-green-700 text-blue-700 cursor-pointer'>
        Login to read posts
        </h1>
        </div>
        </div>
        </Container>
        </div>
    )
}
return(
    <div className=' w-full py-8'>
    <Container>
    <div className=' flex flex-wrap gap-4'>
    {posts.map((post) =>(
        <div key={post.$id} className='  bg-green-300 px-4 py-4 rounded-md w-1/4'>
        <PostCard {...post}/>
        </div>
    ))}
    </div>
    </Container>
    </div>
)
  
}

export default Home
