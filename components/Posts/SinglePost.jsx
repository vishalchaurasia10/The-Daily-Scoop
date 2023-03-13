import React from 'react'
import Image from 'next/image'
import { faUser, faLink, faBookmark, faArrowCircleRight, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'


const SinglePost = () => {
    return (
        <div className="bg-[url('/coolbg2.png')] pl-36 flex w-full">
            <div className="blogsection w-[60%]">
                <div className="bloggerdetail w-full items-center flex pt-28">


                    <div className="details flex items-center w-1/2">
                        <FontAwesomeIcon className='loginImage  mr-6 text-gray-300 w-6 h-6 border rounded-full p-1 border-gray-300' icon={faUser} />
                        <div className=''>
                            <p className='font-bold text-gray-300 font-nunito'>Harris Sockel</p>
                            <p className='text-gray-300 inline-block'>Dec 14, 2022</p>
                            <p className='inline-block ml-4 text-gray-300'>12 min read</p>
                        </div>
                    </div>

                    <div className="socials flex w-1/2 justify-end text-gray-300 space-x-4">
                        <FontAwesomeIcon className='w-4 h-4 hover:text-black' icon={faTwitter} />
                        <FontAwesomeIcon className='w-4 h-4 hover:text-black' icon={faLinkedin} />
                        <FontAwesomeIcon className='w-4 h-4 hover:text-black' icon={faFacebookSquare} />
                        <FontAwesomeIcon className='w-4 h-4 hover:text-black' icon={faInstagram} />
                        <FontAwesomeIcon className='w-4 h-4 hover:text-black' icon={faLink} />
                        <FontAwesomeIcon className='w-4 h-4 hover:text-black' icon={faBookmark} />
                    </div>

                </div>

                <div className="blogTitle text-4xl font-Archivo text-white pt-10 pb-4">
                    <h1>20 Entertaining Uses of ChatGPT You Never Knew Were Possible</h1>
                </div>

                <div className="blogimage flex justify-center py-6">
                    <Image className='w-full' src='/postimg.jpg' width={500} height={500} alt='blogImage' />
                </div>

                <p className="blogContent bg-[rgba(255,255,255,0.1)] text-gray-300 font-lora backdrop-blur-3xl bg-opacity-25 rounded-md shadow-xl py-3 z-50 p-3 border border-[rgba(255,255,255,0.1)] items-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolorum atque, voluptates vero nulla maiores aliquid non sunt animi quis reiciendis fugiat, voluptate assumenda sint magni quae laudantium! Ea, sit dignissimos esse illum asperiores nobis provident omnis soluta quae, distinctio quisquam? Repudiandae quibusdam officia qui nemo sapiente pariatur provident esse deserunt quos, nostrum autem corrupti ipsam magni quam ut at blanditiis fugiat ipsa aperiam? Fugit repellendus nam porro sapiente illo voluptatum illum hic neque tempora inventore placeat, quia rerum quam eveniet ipsa soluta cupiditate sequi nihil velit! Similique harum nostrum magnam odio, nesciunt quos facilis dolorum ipsam obcaecati qui repellat, cupiditate consequuntur reiciendis sint nemo nisi illum iste quibusdam molestias a? Sint, commodi. Recusandae dolorem nemo doloribus ab placeat eaque quaerat, adipisci perspiciatis provident maiores ratione esse excepturi nostrum nobis beatae voluptatem facilis necessitatibus quos pariatur non iure neque illum voluptate omnis! Animi voluptates provident impedit! Ad dignissimos facilis eaque, enim impedit suscipit. Recusandae, eveniet ad quibusdam ipsum earum sit dolore obcaecati est ab amet exercitationem excepturi quidem laudantium ullam? Id aspernatur sequi et itaque amet suscipit veritatis voluptates illum voluptas voluptatum, minima quibusdam delectus consectetur nobis quod nisi omnis nihil quisquam debitis, sunt, autem reprehenderit ut. Doloremque laboriosam ullam voluptatem consectetur aspernatur blanditiis excepturi explicabo reiciendis, omnis incidunt aperiam neque exercitationem nulla odit, dolor, ex voluptatum. Nobis deserunt porro voluptatem suscipit repellendus quae ipsa deleniti necessitatibus ullam quas, sunt autem asperiores magni blanditiis dolorem ratione recusandae! Saepe a quibusdam, aspernatur laboriosam explicabo alias perspiciatis ipsa nemo dolorum sapiente inventore cumque impedit quo, placeat porro iure enim accusamus tempore magnam natus corrupti deserunt temporibus odio incidunt. Magni aut, quidem voluptatem temporibus aperiam quas, deleniti earum cum ipsa mollitia, eos deserunt officiis recusandae odit! Quaerat accusantium aperiam, quae dolorem fugiat laborum natus ex optio! Neque, quaerat nam quam velit delectus voluptatum.
                </p>
            </div>
            <div className="sidebar backdrop-blur-3xl bg-opacity-25 shadow-xl h-screen w-[30%] fixed right-0 pt-20 border-l border-[rgba(255,255,255,0.1)]">
                <div className="sidebarContent flex flex-col px-8 pt-6 space-y-3 items-start text-gray-300">
                    <FontAwesomeIcon className='rounded-full border border-white p-4 w-16 h-16 ' icon={faUser} />
                    <p className="authorName font-nunito font-bold text-lg">Tom Hanks</p>
                    <p className="followers">29K Followers</p>
                    <p className="bio">Keynote speaker, strategy consultant, Rutgers University marketing faculty and author of 9 books including KNOWN, Marketing Rebellion, and Cumulative Advantage.</p>
                    <div className="connect flex items-center space-x-4">
                    <button className='inline-block py-2 hover:-translate-y-[0.1rem] hover:text-black   hover:bg-red-50 duration-150 font-nunito font-semibold border rounded-md px-3 backdrop-blur-lg shadow-lg  border-[rgba(255,255,255,0.1)]'>Follow</button>
                    <FontAwesomeIcon className='hover:text-black ml-2 inline-block' icon={faMessage} />
                    </div>
                    <button className='font-semibold flex items-center hover:text-white text-lg'>
                        More from Tom Hanks
                        <FontAwesomeIcon className='ml-2' icon={faArrowCircleRight} />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SinglePost
{/* <Image className='w-full'  src='/bg1.svg' width={500} height={500} alt='bgimg'></Image> */ }