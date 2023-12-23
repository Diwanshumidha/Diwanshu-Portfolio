import React from 'react'

const NoPage = () => {
  return (
    <div className=' w-full h-[100dvh] flex flex-col justify-center items-center '>
        <h2 className='text-3xl'><span className=' text-primary'>404:</span> Planet Not Found</h2>
        <p className=' text-gray-500'>The Page you are looking has been lost in space</p>
    </div>
  )
}

export default NoPage