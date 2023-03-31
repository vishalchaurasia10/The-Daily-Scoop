import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'

const Contact = () => {

    return (
        <div className={`wrapper py-10 transition-all duration-300 px-2 mt-10 lg:mt-0 `}>
            <div className={`contact relative transition-all duration-1000  backdrop-blur-3xl z-30 lg:top-24 top-10 lg:flex border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,1)] shadow-2xl rounded-2xl m-1 lg:p-8 lg:mx-32`}>
                <div className="details space-y-8 p-6 lg:w-1/2">
                    <h1 className='lg:text-6xl text-5xl font-jost font-bold'>We believe there&apos;s a better way to Scale your Business.</h1>
                    <p className={`text-xl font-medium`}>Thank you for visiting my website! If you have any questions, concerns, or feedback, please don&apos;t hesitate to reach out to me. I am dedicated to providing you with excellent customer service and support.</p>
                    <button className={`bg-orange-400 p-3 rounded-sm transition-all duration-300 hover:-translate-y-1`}>
                        <Link className=' flex items-center' href='https://www.linkedin.com/in/vishal-chaurasia-9a421022a/'>
                            Message me on
                            <FontAwesomeIcon className='mx-1 text-xl' icon={faLinkedin} />
                        </Link>
                    </button>
                </div>
                <div className="form p-6 lg:p-0 lg:w-1/2">
                    <h1 className='text-2xl font-bold font-jost'>Got a
                        <span className='ml-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-500 relative inline-block'>
                            <span className='relative text-white text-6xl font-bold'>Project</span>
                        </span>
                    </h1>
                    <form className='flex pt-8 pb-5 space-y-6 flex-col' action="https://formsubmit.co/vishalvc1003@gmail.com" method='post'>
                        <input required className={`outline-none transition-all duration-300 border-slate-400 drop-shadow-sm border-2 rounded-xl p-4`} type="text" placeholder='Enter Full Name*' name="clientname" id="clientname" />
                        <input required className={`outline-none transition-all duration-300 border-slate-400 drop-shadow-sm border-2 rounded-xl p-4`} type="email" placeholder='Enter Email Address' name="email" id="email" />
                        <textarea required className={` transition-all duration-300 outline-none border-slate-400 drop-shadow-sm border-2 rounded-xl p-4`} name="message" id="" placeholder='Tell Us Something About Your Project' cols="30" rows="4"></textarea>
                        <input type='submit' value='Contact Me' className={`bg-orange-400 p-3 w-fit cursor-pointer rounded-sm transition-all duration-300 hover:-translate-y-1`} />
                        <input type="hidden" name="_next" value="https://the-daily-scoop.vercel.app/" />
                        <input type="hidden" name="_captcha" value="false"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact