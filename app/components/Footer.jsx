import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <a href="#top">
          <Image id='' src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2 cursor-pointer' />
        </a>
        <div className='w-max flex items-center gap-2 mx-auto '>
          <a href="mailto:connect@swarajharode.com"className="flex items-center gap-2">
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
            connect@swarajharode.com
          </a>
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; 2025 by Swaraj Harode. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a target='_blank' href="https://github.com/Swaraj0004">Github</a>
          </li>
          <li>
            <a target='_blank' href="https://www.linkedin.com/in/swarajharode/">LinkedIn</a>
          </li>
          <li>
            <a target='_blank' href="https://x.com/swaraj_harode">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
