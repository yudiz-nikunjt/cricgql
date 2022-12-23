import React from 'react'

const HeaderBottomMenu = ({ results }) => {
  console.log(results)
  return (
    <div className='bg-white flex items-center gap-6 px-8 py-4 whitespace-nowrap w-full text-xs font-semibold uppercase justify-center overflow-hidden'>
      {
        results?.map((item, index) => {
          return (
            <p key={index}>
              {item?.sTitle}
            </p>
          )
        })
      }
    </div>
  )
}

export default HeaderBottomMenu