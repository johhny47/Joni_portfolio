import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0awd3ho', 'template_qmxyiw1', form.current, {
        publicKey:'KTTTp67U6CIiwsSRJ',
      })
      .then(
        () => {
          toast('SUCCESS!');
        },
        (error) => {
          toast('FAILED...', error.text);
        },
      );
  };

    
  return (
    <div id="contact" className="min-h-screen bg-green-100 pb-4">
        <Toaster />
      <h2 className="text-5xl font-bold text-gray-900 pt-14 text-center">Contact</h2>
      <div className="mt-20">
        <div className="md:flex justify-around">
          <div className="text-center md:mt-16">
            <h1 className="text-4xl">Address</h1>
            <p className="md:text-2xl mt-10">Narail sadar,Narail -7500</p>
            <p className="md:text-2xl">Phone:+8801953395475</p>
            <p className="md:text-2xl">Email:mdjohnny063@gmail.com</p>
          </div>
          <div className="px-10 rounded-xl mt-5 pb-64 md:pb-0 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form ref={form} onSubmit={sendEmail} class="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-md">
  <div class="mb-4">
    <label htmlFor="user_name" class="block text-gray-700 font-semibold mb-2">Your Name</label>
    <input 
      type="text" 
      name="user_name" 
      class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
      placeholder="Your Name"
      required
    />
  </div>

  <div class="mb-4">
    <label htmlFor="user_email" class="block text-gray-700 font-semibold mb-2">Your Email</label>
    <input 
      type="email" 
      name="user_email" 
      class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
      placeholder="Your Email"
      required
    />
  </div>

  <div class="mb-4">
    <label htmlFor="message" class="block text-gray-700 font-semibold mb-2">Message</label>
    <textarea 
      name="message" 
      class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
      placeholder="Your Message"
      required
    />
  </div>

  <div class="mt-4">
    <input 
      type="submit" 
      value="Send" 
      class="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
    />
  </div>
</form>

         
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Contact;
