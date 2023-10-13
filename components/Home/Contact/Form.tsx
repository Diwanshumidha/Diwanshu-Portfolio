'use client'
import React from "react";
import SubmitButton from "./SubmitButton";
import { useToast } from "@/components/ui/use-toast";
import { SendEmail } from "@/actions/Email";


export default function Form() {
    const { toast } = useToast()
 
  return (
    <form  action={async (e:FormData)=>{
        const res = await SendEmail(e)
        if(res.error){
            return alert('There Was Problem While Sending Message ')
        }
        
        return toast({
            title: "Message Sent",
            description: "You will get response in given mail",
          })
        
    }} className=" mt-10 flex flex-col w-full max-w-screen-md mx-auto  ">

      <input
        name="senderemail"
        required={true}
        maxLength={60}
        className=" h-14 input"
        title="Email"
        placeholder="Email"
        type="email"
      />
      <textarea
        name="message"
        required={true}
        maxLength={600}
        className=" h-[20ch] my-5 input"
        placeholder="Message"
      />
      <SubmitButton/>
    </form>
  );
}
