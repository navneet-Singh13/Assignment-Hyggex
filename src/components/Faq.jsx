import React from 'react'
import Accordian from './Accordian'

const Faq = () => {
  return (
    <div className='mx-auto flex-col container font-bold mt-40'>
      <h1 className=' text-[#1e2b75] text-[48px]'> 
        FAQ
      </h1>
       <div className='flex-col mt-10 mb-40'>
             <Accordian ques = "Can education Flashcards be used for all age groups ?"/>
             <Accordian ques = "How do Education Flashcards Work for students ?"/>
             <Accordian ques = "Can Education Flashcards be used for test preparation "/>
       </div>
    </div>
  )
}

export default Faq
