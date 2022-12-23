import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#025DE9] flex items-center justify-between w-full px-6 py-4'>
      <Image src='/images/criclogo.svg' alt="logo" width={42} height={30} className='w-36' />
      <button className='bg-white px-3 py-2 text-xs rounded-full text-[#025DE9] font-bold'>Sign In</button>
    </div>
  )
}

export default Header