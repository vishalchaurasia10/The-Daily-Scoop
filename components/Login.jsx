import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    return (
        <>
            <div className="mainBlock bg-cover bg-center bg-no-repeat bg-[url('/wave-haikei.svg')] flex flex-col lg:flex-row justify-center items-center">

                {/* 1st container starts here */}

                <div className="container1 lg:order-2 flex flex-col justify-center items-center lg:h-screen lg:w-1/2">
                    <h1 className='text-4xl pt-32 pb-12 lg:pb-1 text-center lg:pt-0 font-Poppins font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Welcome back! Nice to see you again</h1>
                    <Image className='lg:hidden' src='/login.svg' width={500} height={500} alt='loginImage'/>
                    <Image className='relative hidden lg:block -z-50' src='/login.gif' width={500} height={500} alt='loginImage'/>
                </div>

                {/* 2nd container starts over here */}

                <div className="container2 px-4 lg:px-0 lg:order-1 w-full lg:w-1/2 py-3 flex justify-center items-center">
                    <div className="form flex flex-col backdrop-blur-lg bg-white relative space-y-6 border rounded-lg border-gray-300 shadow-lg  p-4  w-[26rem]">
                        <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 py-3 font-nunito text-2xl font-bold'>LOGIN</h1>
                        <form action="">
                            <div className='flex w-full flex-col space-y-6'>
                                <div className="email flex items-center px-2 py-1 border-2 rounded-lg border-[#E6E9F1]">
                                    <FontAwesomeIcon className='w-3 h-3 pl-2' icon={faUserCircle} />
                                    <input className='text-lg bg-transparent pl-4 p-2 outline-none text-[#ACB2BD] bg-white ' placeholder='Username' type="text" name="username" id="username" />
                                </div>
                                <div className="email flex items-center px-2 py-1 border-2 rounded-lg border-[#E6E9F1]">
                                    <FontAwesomeIcon className='w-3 h-3 pl-2' icon={faEnvelope} />
                                    <input className='text-lg bg-transparent pl-4 p-2 outline-none text-[#ACB2BD] bg-white ' placeholder='Email Id' type="email" name="email" id="email" />
                                </div>
                                <div className="email flex items-center px-2 py-1 border-2 rounded-lg border-[#E6E9F1]">
                                    <FontAwesomeIcon className='w-3 h-3 pl-2' icon={faLock} />
                                    <input className='text-lg pl-4 p-2 outline-none text-[#ACB2BD] bg-transparent ' placeholder='Password' type="password" name="password" id="password" />
                                </div>
                                <div className='flex remember space-x-2 text-sm pl-2 mt-5 justify-between'>
                                    <div class="theme flex items-center mr-2">
                                        <input class="h-5 w-8 appearance-none bg-transparent bg-green-400 border border-[rgba(255,255,255,0.1)] rounded-full" type="checkbox" name="remember" id="remember" title="Change Theme" />
                                        <div class="switch transition-all duration-300 relative -left-[1.9rem] border border-gray-300 bg-white h-[1rem] w-[1rem] rounded-full" id=""></div>
                                        <label htmlFor="remember">Remember me</label>
                                    </div>
                                    <Link className='hover:text-[#ACB2BD]' href='/'>Forgot Password?</Link>
                                </div>
                                <button className='py-2 mt-8 w-1/2 mx-auto hover:-translate-y-[0.1rem] text-white  bg-[#FE538D] duration-150 font-nunito font-semibold border rounded-md px-3 shadow-[#FE538D] border-[rgba(255,255,255,0.1)]'>Login</button>
                            </div>
                        </form>
                        <div className='horizontalRule mx-auto h-[0.1rem] relative my-3 w-[30%] bg-[#FE538D]'></div>
                        <div className="google pb-3 flex justify-center space-x-4 items-center">
                            <FontAwesomeIcon className='text-[#ACB2BD] text-xl hover:text-gray-400' icon={faGoogle} />
                            <FontAwesomeIcon className='text-[#ACB2BD] text-xl hover:text-gray-400' icon={faGithub} />
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Login
