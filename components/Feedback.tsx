import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/material";

export const ContactUs = () => {
  const form = useRef();

  // const sendEmail = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_w7aeh1l", "template_fqmkhvh", form.current, {
  //       publicKey: "zNj3zWex-R9g-gpAV",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="from_name" />
    //   <label>Email</label>
    //   <input type="email" name="from_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <Box>Hello</Box>
  );
};
