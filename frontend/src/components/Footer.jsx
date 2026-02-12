import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-600'>
            <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-border border-b'>
                <div>
                    <img src={assets.logo} alt="logo" className='h-8 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        Professional Car Rental service, with secure payment and verifications.
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#"><img src={assets.facebook_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"><img src={assets.instagram_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"><img src={assets.twitter_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"><img src={assets.gmail_logo} className='w-5 h-5' alt="" /></a>
                    </div>
                </div>

                <div>
                    <p className='text-base font-medium text-gray-800 uppercase'>Links</p>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Cars</a></li>
                        <li><a href="#">List Your Car</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-base font-medium text-gray-800 uppercase'>Resources</p>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-base font-medium text-gray-800 uppercase'>Contact</p>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li>123 sk. Basaksehir Istanbul</li>
                        <li>+1234566788</li>
                        <li>info@carrental.com</li>
                    </ul>
                </div>

            </div>
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()}. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li>|</li>
                    <li><a href="#">Terms</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer