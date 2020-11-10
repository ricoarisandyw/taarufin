import React from 'react'
import { Link } from 'react-router-dom'
import Pages from '../../page/Pages'
import './Header.scss'

const Header: React.FC = () => {
    return <div>
        <header>
            <div className="float-left">
                <Link to={Pages.Home}>
                    <img src={require("../../assets/images/logo.png")} height="100" alt="logo" />
                </Link>
            </div>
            <div className="Menu float-right">
                <ul className="header-menu">
                    <li><Link to={Pages.Home}>Home</Link></li>
                    <li>About Us</li>
                    <li><Link to={Pages.Profile}>Profile</Link></li>
                    <li><Link to={Pages.Login}>Login</Link></li>
                </ul>
            </div>
        </header>
        <div className="header-space">
            
        </div>
    </div>
}

export default Header