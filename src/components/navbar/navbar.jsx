import React,{useState} from 'react'
import { FaListUl,} from "react-icons/fa";
import { IoClose } from "react-icons/io5";



const Navbar = () =>{

const [nav,setNav]=useState(false)
const handleNavigation= () => setNav(!nav)
  return (
    <div className='w-90 h-[60px] bg-gray-400/90 mt-1 rounded-3xl border-2 border-red-500 drop-shadow-lg
    md:rounded-4xl'>
      <div className='flex items-center justify-between h-full w-full px-8'>
        < div className='flex items-center'>
        <h1 className='text-pink-800 text-2xl font-semibold  md:text-4xl '>ABISHEIK</h1>
       <ul className='hidden md:flex p-36 cursor-pointer space-x-10 '>
        
        <button>Home</button>
        <button>Aboutme</button>
        <button>Myskill</button>
        <button>Projects</button>
        <button>Certificate</button>
        <button>Contactme</button>

        
       </ul>
       <div className='hidden md:flex items-center ml-5 rounded-3xl gap-6  '>
        <button className='bg-blue-600 px-1 py-2 rounded-lg'>sign In</button>
        <button className=' bg-blue-600 px-1 py-2 rounded-lg'>sign up</button>
       </div>


        </div>
        <div className='md:hidden' onClick={handleNavigation}>
        {!nav  ? <FaListUl className='text-blue-700 h-5 w-5' /> : <IoClose className='text-blue-700 h-5 w-5 '/>}
        </div>
      </div> 
      <div className='md:hidden'>
        
    <ul className={!nav?"hidden" :'w-full bg-white/98 absolute px-2 flex justify-end'}>
    <div className='border-2 border-red-500 bg-slate-400 
    p-3 ml-16 px-7 mt-5 rounded-2xl  flex flex-col gap-2 cursor-pointer'>
      <button className=' border-2 px-1 mr-20  py-2 rounded-2xl border-indigo-200 '>Home</button>
      <button className=' border-2 px-1 mr-20  py-2 rounded-2xl border-indigo-200'>Aboutme</button>
      <button className=' border-2 px-1 mr-20  py-2 rounded-2xl border-indigo-200'>Myskill</button>
      <button className=' border-2 px-1 mr-20  py-2 rounded-2xl border-indigo-200'>Project</button>
      <button className=' border-2 px-1 mr-20  py-2 rounded-2xl border-indigo-200'>Certificate</button>
      <button className=' border-2 px-1 mr-20  py-2 rounded-2xl border-indigo-200'>Contact</button>


      <div className='flex flex-row mt-6 -ml-7'>
      <button className='bg-transparent text-indigo-500 border px-2 ml-3 py-2 border-indigo-600 mr-9 rounded-md'>sign in</button>
      <button className='bg-indigo-400 text-white px-2 py-2 rounded-md'>sign up</button>
      </div>
      </div>
    </ul>
    
    </div>
    
    </div>
  )
}

export default Navbar