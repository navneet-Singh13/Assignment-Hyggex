import React from 'react'
import Navbar from './components/Navbar'
import PaginationBar from './components/PaginationBar'
import Quiz from './components/Quiz'
import Divider from './components/Divider'
import Faq from './components/Faq'
const App = () => {
  return (
    <div className='px-[20px]  items-center'>
       <Navbar/> 
       <PaginationBar></PaginationBar>
       <Quiz></Quiz>
       <Divider/>
       <Faq/>
    </div>
  )
}

export default App
