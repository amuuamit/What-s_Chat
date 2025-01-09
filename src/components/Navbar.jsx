import { AuthContext } from '@/context/AuthContext'
import { auth } from '@/firebase'
import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'

const Navbar = () => {
  const {currentUser} =useContext(AuthContext);
  if(!currentUser) {
    return <div className='navbar'> Loading...</div>
  }
   
  return (
    <div className='navbar'>
      <span className='logo'>What's Chat</span>
      <div className='user'>
        <img src="https://cdn.pixabay.com/photo/2022/05/17/05/00/happy-7201665_1280.jpg" alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>

    </div>
  )
}

export default Navbar