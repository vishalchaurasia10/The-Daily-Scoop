import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    return (
        <>
        <div className="login flex flex-col space-y-6 justify-center items-center h-screen bg-[url('/coolbg2.png')]">
            <h1 className='text-white mt-12 font-Poppins text-6xl'>Login Here</h1>
            <div className="form backdrop-blur-md bg-[rgba(255,255,255,0.1)] text-gray-300 bg-opacity-25 rounded-md shadow-xl  z-50 py-10 w-1/4 px-8 items-center">
                <form action="loginform">
                    <div className='flex w-full flex-col space-y-6'>
                        <FontAwesomeIcon className='w-32 mx-auto h-32 text-white' icon={faUserCircle} />
                        <div className="email border-b border-[rgba(255,255,255,0.1)]">
                            <FontAwesomeIcon className='w-3 h-3 pb-1' icon={faEnvelope} />
                            <input className='text-lg pl-4 p-2 outline-none text-white bg-transparent ' placeholder='Email Id' type="email" name="email" id="email" />
                        </div>
                        <div className="password border-b border-[rgba(255,255,255,0.1)]">
                            <FontAwesomeIcon className='w-3 h-3 pb-1' icon={faLock} />
                            <input className='text-lg pl-4 p-2 outline-none text-white bg-transparent ' placeholder='Password' type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div className='flex text-sm pl-2 mt-5 justify-between'>
                        <div className="remember flex space-x-2">
                            <input className='' type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <Link className='hover:text-white' href='/'>Forgot Password?</Link>
                    </div>
                    <button className='py-2 mt-8 w-full hover:-translate-y-[0.1rem] text-black  bg-red-50 duration-150 font-nunito font-semibold border rounded-md px-3 backdrop-blur-lg shadow-lg  border-[rgba(255,255,255,0.1)]'>Login</button>
                    <button className='py-2 mt-3 w-full hover:-translate-y-[0.1rem] text-black  bg-red-50 duration-150 font-nunito font-semibold border rounded-md px-3 backdrop-blur-lg shadow-lg  border-[rgba(255,255,255,0.1)]'>Register</button>
                </form>
            </div>
        </div>
        
        </>
    )
}

export default Login