import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

const Register = () => {
    return (
        <>

            <div className="mainBlock bg-cover bg-center bg-no-repeat bg-[url('/background.svg')] flex flex-col lg:flex-row justify-center items-center">

                {/* 1st container starts here */}

                <div className="container1 lg:order-2 flex flex-col justify-center items-center lg:h-screen lg:w-1/2">
                    <div className='text-[#392E33] text-lg font-bold tracking-wide lg:text-lg px-4 lg:px-16 pt-24 lg:pt-16 text-center'>
                        <span className='font-Poppins text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'>Welcome! </span>
                         to 
                         <span className='font-Poppins text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'> The Daily Scoop. </span> 
                         Join our community and access exclusive content by signing up now!
                         </div>
                    <Image className='lg:hidden' src='/signupmobile.svg' width={500} height={500} alt='loginImage' />
                    <Image className='relative hidden lg:block' src='/signupmobile.svg' width={500} height={500} alt='loginImage' />
                </div>

                {/* 2nd container starts over here */}

                <div className="container2 px-4 lg:px-0 lg:order-1 w-full lg:w-1/2 py-3 flex justify-center items-center">
                    <div className="form flex flex-col backdrop-blur-lg bg-white relative space-y-3 border rounded-lg border-gray-300 shadow-lg  p-4  w-[26rem]">
                        <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 py-3 font-nunito text-2xl font-bold'>REGISTER</h1>
                        <form action="">
                            <div className='flex w-full flex-col pb-3 space-y-6'>
                                <div className="email flex items-center px-2 py-1 border-2 rounded-lg border-[#E6E9F1]">
                                    <FontAwesomeIcon className='w-3 h-3 pl-2' icon={faUserCircle} />
                                    <input className='text-lg bg-transparent pl-4 p-2 outline-none text-gray-500 bg-white ' placeholder='Username' type="text" name="username" id="username" />
                                </div>
                                <div className="email flex items-center px-2 py-1 border-2 rounded-lg border-[#E6E9F1]">
                                    <FontAwesomeIcon className='w-3 h-3 pl-2' icon={faEnvelope} />
                                    <input className='text-lg bg-transparent pl-4 p-2 outline-none text-gray-500 bg-white ' placeholder='Email Id' type="email" name="email" id="email" />
                                </div>
                                <div className="email flex items-center px-2 py-1 border-2 rounded-lg border-[#E6E9F1]">
                                    <FontAwesomeIcon className='w-3 h-3 pl-2' icon={faLock} />
                                    <input className='text-lg pl-4 p-2 outline-none text-gray-500 bg-transparent ' placeholder='Password' type="password" name="password" id="password" />
                                </div>
                                <div className="terms flex items-center -mt-[0.75rem] space-x-2 justify-center text-sm">
                                    <input className='mt-[3px]' type="checkbox" name="agreeToTerm" id="agreeToTerms" />
                                    <label htmlFor="agreeToTerms">
                                        I have read and agree to <span className='text-[#FE538D]'>Terms & Conditions</span>
                                    </label>
                                </div>

                                <button className='py-2 mt-8 w-1/2 mx-auto hover:-translate-y-[0.1rem] text-white  bg-[#FE538D] duration-150 font-nunito font-semibold border rounded-md px-3 shadow-[#FE538D] border-[rgba(255,255,255,0.1)]'>Sign Up</button>
                            </div>
                        </form>
                        <div className='horizontalRule mx-auto h-[0.1rem] relative w-[30%] bg-[#FE538D]'></div>
                        <div className="google pt-3 pb-1 flex justify-center space-x-4 items-center">
                            <FontAwesomeIcon className='text-[#ACB2BD] text-xl hover:text-gray-400' icon={faGoogle} />
                            <FontAwesomeIcon className='text-[#ACB2BD] text-xl hover:text-gray-400' icon={faGithub} />
                        </div>
                        <div className="login flex items-center space-x-1 justify-center text-sm">
                            <span>Already have an account?</span> <Link href='/login' className='text-[#FE538D]'>Sign in</Link>
                        </div>
                    </div>
                </div>


            </div>




            {/* <div className="login flex flex-col space-y-6 justify-center items-center h-screen bg-[url('/coolbg2.png')]">
                <h1 className='text-white mt-12 font-Poppins text-5xl'>Register Here</h1>
                <div className="form backdrop-blur-md bg-[rgba(255,255,255,0.1)] text-gray-300 bg-opacity-25 rounded-md shadow-xl  z-50 py-10 w-1/4 px-8 items-center">
                    <form action="loginform">
                        <div className='flex w-full flex-col space-y-6'>
                            <FontAwesomeIcon className='w-32 mx-auto h-32 text-white' icon={faUserCircle} />
                            <div className="email border-b border-[rgba(255,255,255,0.1)]">
                                <FontAwesomeIcon className='w-3 h-3 pb-1' icon={faUser} />
                                <input className='text-lg pl-4 p-2 outline-none text-white bg-transparent ' placeholder='Username' type="text" name="username" id="username" />
                            </div>
                            <div className="email border-b border-[rgba(255,255,255,0.1)]">
                                <FontAwesomeIcon className='w-3 h-3 pb-1' icon={faEnvelope} />
                                <input className='text-lg pl-4 p-2 outline-none text-white bg-transparent ' placeholder='Email Id' type="email" name="email" id="email" />
                            </div>
                            <div className="password border-b border-[rgba(255,255,255,0.1)]">
                                <FontAwesomeIcon className='w-3 h-3 pb-1' icon={faLock} />
                                <input className='text-lg pl-4 p-2 outline-none text-white bg-transparent ' placeholder='Password' type="password" name="password" id="password" />
                            </div>
                        </div>
                        <button className='py-2 mt-8 w-full hover:-translate-y-[0.1rem] text-black  bg-red-50 duration-150 font-nunito font-semibold border rounded-md px-3 backdrop-blur-lg shadow-lg  border-[rgba(255,255,255,0.1)]'>Register</button>
                        <Link href='/login'><button className='py-2 mt-3 w-full hover:-translate-y-[0.1rem] text-black  bg-red-50 duration-150 font-nunito font-semibold border rounded-md px-3 backdrop-blur-lg shadow-lg  border-[rgba(255,255,255,0.1)]'>Login</button></Link>
                    </form>
                </div>
            </div> */}

        </>
    )
}

export default Register
