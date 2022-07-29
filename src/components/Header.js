import React from 'react'
import './Header.css'

export const Header = ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
        <div className='header--logo'>
            <a href='/'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png' alt='Netflix'/>
            </a>
        </div>
        <div className='header--user'>
            <a href='/'>
                <img src='https://cdn-icons-png.flaticon.com/512/1053/1053244.png' alt='Usuario'/>
            </a>
        </div>
    </header>
  )
}
