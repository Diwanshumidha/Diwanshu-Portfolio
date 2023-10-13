import React from 'react'
import Form from './Form'
import { Email, findLinkByName } from '@/lib/Data'

const Contact = () => {
  return (
    <section className=' w-full scroll-m-5' id='contact'>
        <div className='flex flex-col w-full gap-1 '>
        <h2 className=' mx-auto text-3xl '>Contact Us</h2>
        <p className=' text-secondary-gray  text-center'>Please contact me directly at <a href={`mailto:${Email}`} className=' underline text-primary'>{Email}</a> or throughout this form </p>

        </div>
        <Form/>
    </section>
  )
}

export default Contact