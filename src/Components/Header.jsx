import React from 'react'
import logo from '../assets/logo.svg'

function Header() {
    return (
       <header>
              <div className='header'>
              <img src={logo} alt="" />
              <ul className="menu">
                <li>Главная</li>
                <li>О нас</li>
                <li>Контакты</li>
              </ul>
              </div>
              <hr />
       </header>
       
    )
}

export default Header