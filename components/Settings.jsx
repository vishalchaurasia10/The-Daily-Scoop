import React from 'react'
import Image from 'next/image'

const Settings = () => {
    return (
        <div className="pt-20 pb-1 px-32 flex flex-col h-screen justify-center items-center bg-[url('/coolbg2.png')]">
            <div className="updation flex justify-between">
                <h1 className='text-3xl text-white font-nunito'>Update Account</h1>
            </div>
            <div className="profile">
                <form action="profilesetting">
                    <div className="profileimage flex items-center justify-center">
                        <label htmlFor="profileimage">
                            <Image className='cursor-pointer rounded-full m-3 my-6 h-56 w-56' title='Change profile picture' src='/postimg.jpg' width={500} height={500} alt='profile picture' />
                        </label>
                        <input className='hidden' type="file" name="profileimage" id="profileimage" />
                    </div>
                    <div className="profiledetails flex flex-col">
                        <input className='text-lg pl-2 p-2 outline-none text-white bg-transparent border-b border-[rgba(255,255,255,0.1)]' placeholder='Username' type="text" name="username" id="username" />
                        <input className='text-lg pl-2 p-2 outline-none text-white bg-transparent border-b border-[rgba(255,255,255,0.1)]' placeholder='Email' type="email" name="email" id="email" />
                        <input className='text-lg mb-3 pl-2 p-2 outline-none text-white bg-transparent border-b border-[rgba(255,255,255,0.1)]' placeholder='Password' type="password" name="password" id="passwordame" />
                        <textarea class="w-full md:h- p-4 pt-5 font-nunito font-light text-white text-lg focus:outline-none bg-white backdrop-blur-md bg-opacity-25 rounded-md placeholder:text-gray-300 placeholder:text-lg " placeholder='Add you bio...' name="bio" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="py-6 buttons flex justify-between">
                        <button className='py-2 hover:-translate-y-[0.1rem] hover:text-black  bg-red-50 duration-150 font-nunito font-semibold border rounded-md px-3 backdrop-blur-lg shadow-lg  border-[rgba(255,255,255,0.1)]'>Save</button>
                        <button className='py-2 hover:-translate-y-[0.1rem] hover:text-red-500  bg-red-50 duration-150 font-nunito font-semibold border rounded-md px-3 backdrop-blur-lg shadow-lg  border-[rgba(255,255,255,0.1)]'>Delete Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings
