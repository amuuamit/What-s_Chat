import Chat from '@/components/Chat'
import SideBar from '@/components/SideBar'
import React from 'react'

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <SideBar/>
            <Chat/>

        </div>
    </div>
  )
}

export default Home