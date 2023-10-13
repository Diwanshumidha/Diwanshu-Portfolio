"use server";

import ContactFormEmail from "@/emails/contact-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function SendEmail(e: FormData) {
  "use server";

  const senderemail = e.get("senderemail");
  const message = e.get("message");

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid Message",
    };
  }

  if (!senderemail || typeof senderemail !== "string") {
    return {
      error: "Invalid Email",
    };
  }

  console.log(senderemail, message);

  try {
    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: "saidiwanshu1880@gmail.com",
      subject: "Hello World",
      react: <ContactFormEmail message={message} senderEmail={senderemail}/>,
      reply_to: senderemail,
    });

    return{
        success:true
    }
  } catch (error) {
    console.log(error);
    return {
      error: "Something Went Wrong",
    };
  }
}
