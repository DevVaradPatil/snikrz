import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})

  };

  const handleSubmit = (e) => {
    e.preventDefault();
   if(form.name && form.email && form.message){
    setLoading(true);

    emailjs.send('service_0kneo4k',
      'template_0r138zy',
      {
        from_name: form.name,
        to_name: 'Varad',
        from_email: form.email,
        to_email: 'varadapatil123@gmail.com',
        message: form.message
      },
      'gPSVXRIE5XamWG-UM'
    )
    .then(()=>{
      setLoading(false);
      alert('Thank you. We will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: '',
      })
    },(error)=>{
      setLoading(false);
      console.log(error);
      alert('Something Went Wrong!!!')
    })
  }
  };
  return (
    <div className='w-full px-20 xs:px-4'>
      <div className='my-10 xs:my-5 shadow-xl rounded-2xl h-[600px] xs:h-full bg-zinc-300  flex justify-center items-center overflow-hidden xs:flex-col'>
        <div className='p-10 xs:p-6 xs:pb-12 justify-center items-center w-[50%] xs:w-full h-full xs:h-[30%] bg-img-shoe2  '>
          <p className='text-6xl text-white font-semibold'>Contact Us</p>
        </div>
        <div className='flex justify-center items-center w-[50%] h-full xs:w-full xs:h-[70%] flex-col bg-img-shoe3'>
        <div className='flex justify-center items-start p-5 w-full h-full flex-col backdrop-blur-lg'>
          <p className='text-lg text-white'>Fill the details</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-2 flex flex-col gap-4 w-full pr-10 xs:pr-0"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-transparent py-4 px-6 placeholder:text-slate-700  text-black outlined-none border rounded-lg border-slate-300 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-transparent py-4 px-6 placeholder:text-slate-700  text-black  outlined-none border rounded-lg border-slate-300 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-transparent py-4 px-6 placeholder:text-slate-700  text-black  outlined-none border rounded-lg border-slate-300 font-medium"
            /> 
          </label>
          <button type="submit" className="bg-white border transition-all duration-200 hover:text-white hover:bg-transparent hover:scale-105 hover:border-white w-[40%] xs:w-auto py-3 px-8 otuline-none text-[20px] font-bold shadow-md rounded-xl " >
            {loading ? 'Sending...' : 'SEND'}
          </button>
        </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact