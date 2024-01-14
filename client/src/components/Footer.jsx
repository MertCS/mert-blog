import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaItchIo } from "react-icons/fa";

export default function FooterComponent() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5 '>
                <Link to = "/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Mert's</span>
                    Blog
                </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                        <Footer.Title title='About' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href="/about"
                                target='blank'
                                rel='noopener noreferrer'
                            >
                                Mert's Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow Me' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href="https://github.com/MertCS"
                                target='blank'
                                rel='noopener noreferrer'
                            >
                                GitHub
                            </Footer.Link>
                            <Footer.Link
                                href="https://www.linkedin.com/in/mert-emre-yamal%C4%B1-6816842aa/"
                                target='blank'
                                rel='noopener noreferrer'
                            >
                                LinkedIn
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal ' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href="#"
                            >
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link
                                href="#"
                            >
                                Terms &amp; Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright 
                    href='#' 
                    by="Mert's Blog" 
                    year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href="https://github.com/MertCS" icon={BsGithub}/>
                    <Footer.Icon href="https://www.linkedin.com/in/mert-emre-yamal%C4%B1-6816842aa/" icon={BsLinkedin}/>
                    <Footer.Icon href="https://www.instagram.com/mertemreyamali/" icon={BsInstagram}/>
                    <Footer.Icon href="https://twitter.com/MertEYamali" icon={BsTwitter}/>
                    <Footer.Icon href="https://mertcs.itch.io/" icon={FaItchIo}/>
                </div>
                
            </div>
        </div>
    </Footer>
  )
}
