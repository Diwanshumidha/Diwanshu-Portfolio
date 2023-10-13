'use client'
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
//@ts-expect-error
import { experimental_useFormStatus as useFormStatus} from "react-dom";
import {AiOutlineLoading} from 'react-icons/ai'


export default function SubmitButton() {
    const { pending } = useFormStatus();
  return (
    <button
        type="submit"
        className=" h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all  flex justify-center items-center gap-2 group focus:scale-110 hover:scale-110 active:scale-105   "
      >
        {pending ? <div className=' flex justify-center items-center gap-2'> <AiOutlineLoading className=' animate-spin'/> Sending...</div> : <>
        Submit
        <FaPaperPlane className="opacity-70 group-hover:translate-x-1 transition " />
        </>}{" "}
       
      </button>
  )
}
