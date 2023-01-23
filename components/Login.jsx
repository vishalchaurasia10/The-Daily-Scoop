import React, { useState } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    const [remember, setRemember] = useState(0);
    const changeRemember = () => {
        if (remember === 0) {
            setRemember(1)
        } else {
            setRemember(0)
        }
    }

    return (
        <>
            <div className="mainBlock bg-cover bg-center bg-no-repeat bg-[url('/background.svg')] flex flex-col lg:flex-row justify-center items-center">

                {/* 1st container starts here */}

                <div className="container1 lg:order-2 flex flex-col justify-center items-center lg:h-screen lg:w-1/2">
                    <div className='text-lg text-[#392E33] p-4 tracking-wide pt-24 pb-8 lg:pb-1 text-center lg:pt-12 font-Poppins font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'>
                        <span className='font-Poppins text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'>Welcome! </span>
                        back! We're glad you're here.
                        <span className='font-Poppins text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'> Login </span>
                        to access all your favorite content and stay connected with our community. Don't have an account yet?
                        <Link className=' bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]' href='/register' > Sign up</Link> now and join the fun!
                    </div>
                    <Image className='lg:hidden' src='/login.svg' width={500} height={500} alt='loginImage' />
                    <Image className='relative hidden left-16 lg:block -z-50' src='/login.gif' width={500} height={500} alt='loginImage' />
                </div>

                {/* 2nd container starts over here */}

                <div className="container2 px-4 lg:px-0 lg:order-1 w-full lg:w-1/2 py-3 flex justify-center items-center">
                    <div className="form flex flex-col backdrop-blur-lg bg-white relative space-y-6 border rounded-lg border-gray-300 shadow-lg  p-4  w-[26rem]">
                        <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 py-3 font-nunito text-2xl font-bold'>LOGIN</h1>
                        <form action="">
                            <div className='flex w-full flex-col space-y-6'>
                                {/* <div className="email flex items-center px-2 py-1 border-2 rounded-lg border-[#E6E9F1]">
                                    <FontAwesomeIcon className='w-3 h-3 pl-2' icon={faUserCircle} />
                                    <input className='text-lg bg-transparent pl-4 p-2 outline-none text-[#ACB2BD] bg-white ' placeholder='Username' type="text" name="username" id="username" />
                                </div> */}
                                <div className="email flex items-center px-2 py-1 border-2 rounded-lg border-[#E6E9F1]">
                                    <FontAwesomeIcon className='w-3 h-3 pl-2' icon={faEnvelope} />
                                    <input className='text-lg bg-transparent pl-4 p-2 outline-none text-gray-500 bg-white ' placeholder='Email Id' type="email" name="email" id="email" />
                                </div>
                                <div className="email flex items-center px-2 py-1 border-2 rounded-lg border-[#E6E9F1]">
                                    <FontAwesomeIcon className='w-3 h-3 pl-2' icon={faLock} />
                                    <input className='text-lg pl-4 p-2 outline-none text-gray-500 bg-transparent ' placeholder='Password' type="password" name="password" id="password" />
                                </div>
                                <div className='flex remember space-x-2 text-sm pl-2 mt-5 justify-between'>
                                    <div className="rememberMe flex items-center">
                                        <input onClick={changeRemember} className="h-5 w-8 appearance-none bg-transparent bg-green-400 border border-[rgba(255,255,255,0.1)] rounded-full" type="checkbox" name="remember" id="remember" title="Remember me" />
                                        <div onClick={changeRemember} className={`switch transition-all duration-300 relative ${remember === 0 ? '-left-[1.9rem]' : '-left-[1.1rem]'} border border-gray-300 bg-white h-[1rem] w-[1rem] rounded-full`} id=""></div>
                                        <label className='-ml-2' htmlFor="remember">Remember me</label>
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
                        <div className="login flex items-center space-x-1 justify-center text-sm">
                            <span>New User?</span> <Link href='/register' className='text-[#FE538D]'>Sign Up</Link>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Login
