import React from 'react'

const Header = ({data}) => {

  const handleLogout = () =>{
    localStorage.removeItem('loggedInUser')
    window.location.reload()
  }

 
  return (
    <div className='Header'>
        <h1>
            Hello <br /> <span className='Username'>{data} 👋</span>
        </h1>
        <button className='Logout-Btn' onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Header