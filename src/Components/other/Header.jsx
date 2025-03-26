import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
        <h1>
            Hello <br /> <span className='Username'>Sanchit 👋</span>
        </h1>
        <button className='Logout-Btn'>Log out</button>
    </div>
  )
}

export default Header