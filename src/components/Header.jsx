import { Link } from 'react-router-dom'

import React from 'react'
import { Button } from "@/components/ui/button"

export const header = () => {
  return (
    
    <div className='w-full flex justify-between items-center bg-black top-0 left-0 decoration-none px-4 py-2  h-16 fixed shadow-md z-50'>

      <div className='flex items-center space-x-1'>

        <a href="#" > <img src="/logo.png" alt="logo" className='h-8 w-8 object-contain' /></a>

        <a href=""> <h7 className='text-white text-[18px] font-mono ' >TrackIt</h7> </a>
      </div>

      <div className='text-white h-6 space-x-1.5' >

      <Link to="/dashboard">
      
        <Button className="bg-blue-700 hover:bg-blue-400 text-white" >Dashboard</Button>

        </Link>

        <Button className="bg-blue-700 hover:bg-blue-400 text-white" >Get Started!</Button>
        
      </div>
    </div>
  )
}

export default header;