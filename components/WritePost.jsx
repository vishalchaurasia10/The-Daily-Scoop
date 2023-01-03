import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from 'next/image'

const WritePost = () => {
    return (
        <div className="bg-[url('/coolbg2.png')]">
            <div className="formwrapper w-[70%] pt-32 mx-auto ">

                <Image className='w-full h-72 object-cover rounded-lg' src='/hero1.jpg' width={500} height={500} alt='blogimage' />

                <form action="writepost">

                    <div className='flex space-x-3 items-center py-6'>

                        <label htmlFor="blogimg" title='Add Image'>
                            <FontAwesomeIcon className='text-gray-300 hover:text-white w-6 h-6 border border-white rounded-full' icon={faPlus} />
                        </label>

                        <input className='hidden' type="file" name="blogImage" id="blogimg" />

                        <input class="w-full h-12 md:h-16 pl-4 focus:outline-none placeholder:text-gray-300 placeholder:text-lg text-white bg-white backdrop-blur-md bg-opacity-25 rounded-md" placeholder='Title' id="blogTitle" type="text" title="Add Title"></input>
                    </div>

                    <textarea class="w-full md:h-screen p-4 pt-5 font-nunito font-light text-white text-lg focus:outline-none bg-white backdrop-blur-md bg-opacity-25 rounded-md placeholder:text-gray-300 placeholder:text-lg " placeholder='Tell your story...' name="note" id="note" cols="30" rows="10" title="Add Note Text"></textarea>

                    <button className='py-2 my-6 bg-[rgba(255,255,255,0.1)] text-white hover:-translate-y-[0.1rem] hover:text-black   hover:bg-red-50 duration-150 font-nunito font-medium border rounded-md px-3 backdrop-blur-lg shadow-lg  border-[rgba(255,255,255,0.1)]'>Publish</button>
                </form>


            </div>
        </div>
    )
}

export default WritePost
