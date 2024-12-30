import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const userSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fistname ,setFirstname] = useState("");
  const[lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});


  const handleSubmit = (e) => {

  e.preventDefault();
    setUserData({
      email: email,
      password: password,
      fullName: {
        firstName: '',
        lastName: ''
    }

    })
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
    
  }
  return (
     <div className="p-7 h-screen flex flex-col justify-between">
         <div>
           <img className="w-16 mb-10"
             src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
             alt=""
           />
           <form action="" onSubmit={(e) => {handleSubmit(e)}}>
             <h3 className="text-lg font-medium mb-2">What's Your Name? </h3>
              <div>
              <input
               className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
               required
               type="name"
               value={fistname}
               onChange={(e) => setFirstname(e.target.value)}
               placeholder="First Name"
             />

              <input
               className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
               required
               type="name"
               value={lastname}
               onChange={(e) => setLastname(e.target.value)}
               placeholder="last Name"
             />
              </div>

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
           <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login Here</Link></p>
         </div>
         <div>
         <div>
         <p className='text-[12px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
         Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
         </div>
         </div>
       </div>
  )
}

export default userSignup
