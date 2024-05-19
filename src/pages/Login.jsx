import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login= () => {
  const navigate=useNavigate();
  return (
      <main className="w-full flex flex-col items-center justify-center px-4 py-20 min-h-screen ">
          <div className="max-w-sm w-full text-gray-600">
              <div className="text-center">
                  <img src="/logo.png" width={150} className="mx-auto" />
                  <div className="mt-5 space-y-2">
                      <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                      <p className="">Don't have an account? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={()=>navigate("/register")}>Sign up</a></p>
                  </div>
              </div>
              <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-8 space-y-5"
              >
                  <div>
                      <label className="font-medium">
                          Email
                      </label>
                      <input
                          type="email"
                          required
                          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg bg-white"
                      />
                  </div>
                  <div>
                      <label className="font-medium">
                          Password
                      </label>
                      <input
                          type="password"
                          required
                          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg bg-white"
                      />
                  </div>
                  <button
                      className="w-full px-4 py-2 text-white font-medium button rounded-lg duration-150"
                  >
                      Sign in
                  </button>
                  
              </form>
          </div>
      </main>
  )
}

export default Login