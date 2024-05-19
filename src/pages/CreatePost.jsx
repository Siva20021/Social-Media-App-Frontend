
import { Avatar } from '@mui/material'
import { RiProfileFill } from 'react-icons/ri'
import { useState } from 'react';
const CreatePost=()=> {
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  return (
    <form className='min-h-screen'>
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
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
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
