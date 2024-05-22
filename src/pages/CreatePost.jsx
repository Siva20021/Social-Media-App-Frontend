
import { Avatar } from '@mui/material'
import { RiProfileFill } from 'react-icons/ri'
import { useState } from 'react';
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';
const CreatePost=()=> {
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [image,setImage]=useState('');
  const preset_key=import.meta.env.VITE_PRESET_KEY;
  const handleFile=(e)=>{
    const file=e.target.files[0];
    const formData=new FormData();
    formData.append('file',file);
    formData.append('upload_preset',preset_key);
    
    axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,formData).then((res)=>{
      setImage(res.data.secure_url);
    }).catch((err)=>{
      toast.error('Failed to upload Image');
    });
  }
  const user=JSON.parse(localStorage.getItem('user'));
  
  const creatPost=async(e)=>{
    e.preventDefault();
    try{
      if(title=='' || description=='' || image==''){
        
        toast.error('Please Fill all the Fields');
      }
      const response=await axios.post('api/posts',{
        title,
        content:description,
        image,
        userId:user.id,
        username:user.username,
      });
      
      if(response.status===201){
        toast.success('Post Created Successfully');
        navigate("/");
      }
      
    }catch(err){
      toast.error(err.message);
    }
  }
  return (
    <form className='min-h-screen' onSubmit={(e)=>{
      
      creatPost(e);
      }}>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className="space-y-12 mx-auto lg:px-24 px-10 py-5 ">
        <div className=" border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Create Post</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This page is used to create Post.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-m bg-white">
                  
                  <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={(e)=>setTitle(e.target.value)}
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 px-3  text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  onChange={(e)=>setDescription(e.target.value)}
                  rows={3}
                  className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 px-3 py-2"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-white">
                <div className="text-center">
                  <RiProfileFill className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold  hover:text-[#f91e5a]"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="image" type="file" accept="image/*" className="sr-only" onChange={handleFile} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            {image && ( 

              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Cover photo
                </label>
                <div className="relative">
                  <div className="text-center mt-2 relative w-80">
                    <div className='absolute top-2 right-2 z-50 cursor-pointer' onClick={()=>setImage('')}>
                      <IoMdClose className='text-black  rounded-full'/>
                    </div>
                    <img src={image} className='w-80 h-80 object-cover  border border-dashed border-gray-900/25'/>
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
      <div className="mx-auto lg:px-24 px-10 py-5">
        <button
          type="submit"
          className="button"
        >
          Upload
        </button>
      </div>
    </form>
  )
}

export default CreatePost
