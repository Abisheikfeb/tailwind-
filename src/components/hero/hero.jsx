import React, {useState} from 'react'
import photo from '../../assets/my image.jpg'
import { IoCallOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";

const Hero = () => {
  const [showMore,setshowMore]=useState(false);
  const toggleIcons=()=>{
    setshowMore(! showMore);
  };
  return (
    <div>
      <div className='my-10 flex items-center justify-center'>
        <img  className='h-72 w-40 rounded-3xl border-2 border-red-300 shadow-2xl shadow-red-400' 
        src={photo} alt="" />

      </div>
       
      <div className='md:hidden relative flex flex-col items-start space-y-4 '>
        <button onClick={toggleIcons} className='p-3'>
        <IoCallOutline className="text-blue-500" size={24}/>

        </button>
      
      {showMore &&(
        <div className=' absolute flex flex-col  bottom-14 '>
          <button className=' p-3 flex flex-col gap-5 '>
          <FaLinkedin size={24}/>
          <BsGithub size={24}/>
          < GoMail size={24}/>
          < FaInstagram size={24}/>

          </button>
        </div>
      )}
      </div>

   <div className='flex ml-10 font-bold md:ml-20 md:mt-10'>
    <div >
      <h1 className='text-4xl text-amber-700'>Iam Abisheik </h1>
      <p className='text-2xl text-lime-200'>Back end devoloper in java</p>
      <p className='mt-2 md:max-w-md md:break-words md:text-2xl '>
        using spring boot API server on backend devolopement while using sql data structure backend </p>
        <button className='bg-slate-600 border-2 p-2 mt-2 rounded-lg border-rose-800'>
          Coutact us
        </button>
    </div>
    
   </div>
  
   
    </div>
  )
}

export default Hero