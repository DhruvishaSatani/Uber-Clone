import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});
    const handleSubmit = (e) => {
  
    e.preventDefault();
      setUserData({
        email: email,
        password: password
      })
      setEmail('');
      setPassword('');
      
    }
  
  return (
   <div className="p-7 h-screen flex flex-col justify-between">
         <div>
           <img className="w-20  mb-10"
             src="https://logowik.com/content/uploads/images/uber4965.logowik.com.webp"
             alt=""
           />
           <form action="" onSubmit={(e) => {handleSubmit(e)}}>
             <h3 className="text-lg font-medium mb-2">What's Your email? </h3>
             <input
               className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               type="email"
               placeholder="email@example.com"
             />
             <h3 className="text-lg font-medium mb-2">Password </h3>
             <input
               className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
               required
               value={password}
               onChange={(e) => setPassword(e.target.value)}
   
               type="password"
               placeholder="password"
             />
             <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
               Login
             </button>
           </form>
           <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
         </div>
         <div>
         <div>
         <Link
          to='/login'
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as User</Link>
         </div>
         </div>
       </div>
  )
}

export default CaptainLogin
