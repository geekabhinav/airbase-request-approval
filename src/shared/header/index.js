import React from 'react'
import Logo from '../../assets/images/airbase-logo.png'

const Header = props => {
    return <header>
        <img src={Logo} alt="Airbase Logo" height={70}/>
    </header>
}

export default Header