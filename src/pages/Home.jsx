import React,{useState,useEffect} from 'react'
import Post from '../components/Post'
import { FaUserFriends } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import axios from 'axios';
const Home =() => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [posts,setPosts]=useState([]);
  const getPosts=async()=>{
    try{
      const response = await axios.get('api/posts');
      setPosts(response.data);
    }catch(err){
      console.log(err);
    }
  }
  console.log(posts);
  useEffect(()=>{
    getPosts();
  },[posts]);
  return (
    <div>
      <section className="px-5 py-10 min-h-screen ">
        <div className="container grid grid-cols-12 gap-y-6 md:gap-10 ">
          <div className='col-span-12 space-y-5  md:col-span-3 lg:sticky top-10 self-start flex justify-center items-center '>
            {
              user ?
                (
                  <div className="flex flex-col bg-white shadow-md px-10 py-5 rounded-lg w-full max-w-[500px] md:min-w-[300px] space-y-5">

                    <h1 className='text-[24px] font-medium'>Hello <span className='text-[#f91e5a] font-bold'>{user.username} 👋🏻</span> </h1>
                    <hr/>
                    <div className='flex flex-col space-y-5'>
                      <h2 className='flex space-x-3'>
                        <GrGallery className='w-6 h-6' />
                        <span className='font-medium'>Posts:</span>
                        <span className='font-bold ml-3'>{user?.posts?.length ? user.posts.length : 0}</span>
                      </h2>
                      <h2 className='flex space-x-3'>
                        <FaUserFriends className='w-6 h-6' />
                        <span className='font-medium'>Friends:</span>
                        <span className='font-bold ml-3'>{user?.friends?.length ? user.friends.length : 0}</span>

                      </h2>
                    </div>
                  </div>
                )
                :
                (
                  <div className="flex flex-col bg-white shadow-md px-10 py-5 rounded-lg w-full max-w-[500px] md:min-w-[300px]">

                    <h1 className='text-[24px] font-bold'>Welcome User</h1>
                    <div className='flex flex-col space-y-5'>
                      <h2 className='text-[20px] font-medium'>Start your journey</h2>
                      <button className='button'>Signup</button>
                      <button className='button2'>Login</button>
                    </div>
                  </div>
                )}

          </div>
          <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover  xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96">
            <div className='flex flex-col space-y-10 items-center w-full'>
              {posts?.map((post, index) => {
                return <Post key={index} title={post.title} content={post.content} image={post.image} userId={post.userId} createdAt={post.createdAt} likes={post.Likes} comments={post.comments} id={post.id} username={post.username}/>
              })}
            </div>

          </div>
          <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden  lg:block sticky top-10 self-start shadow-md px-10 bg-white">
            <div className="mb-8 space-x-5 border-b-2 border-opacity-10  ">
              <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 ">Latest</button>
              <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 ">Popular</button>
            </div>
            <div className="flex flex-col divide-y  lg:sticky">
              <div className="flex px-1 py-4">
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 " src="https://source.unsplash.com/random/244x324" />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</a>
                  <p className="mt-auto text-xs ">5 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block  lg:ml-2 lg:inline hover:underline">Politics</a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 " src="https://source.unsplash.com/random/245x325" />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nulla consectetur efficitur.</a>
                  <p className="mt-auto text-xs ">14 minutes ago
                    <a rel="noopener noreferrer" href="#" className="blocklg:ml-2 lg:inline hover:underline">Sports</a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 " src="https://source.unsplash.com/random/246x326" />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Vitae semper augue purus tincidunt libero.</a>
                  <p className="mt-auto text-xs ">22 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block  lg:ml-2 lg:inline hover:underline">World</a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 " src="https://source.unsplash.com/random/247x327" />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Suspendisse potenti.</a>
                  <p className="mt-auto text-xs ">37 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block lg:ml-2 lg:inline hover:underline">Business</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home