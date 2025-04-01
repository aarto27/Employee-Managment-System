import React from 'react'

const Header = ({data,admin ,setUser}) => {

  const handleLogout = () =>{
    localStorage.removeItem('loggedInUser');
    setTimeout(() => {
      setUser("");
    }, 1000);
  }

  return (
    <div className='Header'>
        <h1>
        Hello <br /> <span className='Username'>{data?.username || admin?.username} 👋</span>
        </h1>
        <button className='Logout-Btn' onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Header