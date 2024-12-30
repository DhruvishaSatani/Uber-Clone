import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="h-screen pt-8 bg-cover bg-bottom bg-center  bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full flex justify-between flex-col">
          <img className='w-14 ml-9 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className="bg-white pb-7 py-4 px-4">
                <h2 className='text-3xl font-bold'>Get Start with Uber</h2>
                <Link to='/login'  className='flex items-center justify-center bg-black w-full  text-white py-3 rounded mt-4 '>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home
