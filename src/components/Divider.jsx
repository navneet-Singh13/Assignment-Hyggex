import React from 'react'
import dividerlogo from '../assets/dividerlogo.png'
import { AiFillPlusCircle } from 'react-icons/ai'
const Divider = () => {
  return (
    <div className='container md:mx-auto items-center mt-32 flex justify-between'>
       <img src={dividerlogo}  alt="" className='md:w-[200px] w-[110px]' />
       <div className='flex items-center md:text-2xl text-[#051A91] font-semibold '>
        
       <AiFillPlusCircle size={50} color='#051A91' />   Create Flashcard &nbsp; &nbsp; 
        
       </div>
    </div>
  )
}

export default Divider
