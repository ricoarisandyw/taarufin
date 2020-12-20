import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pages from '../../page/Pages'
import { RootState } from '../../redux/reducers'
import { FirebaseState } from '../../redux/reducers/FirebaseReducers'
import './Header.scss'

const Header: React.FC = () => {
    const { auth } = useSelector<RootState, FirebaseState>((state)=> state.firebase)

    // const [user] = useAuthState(auth)
    console.log(auth)
    const user = {
        email :"rico@mail.com"
    }

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
                    <li><Link to={Pages.Match}>Find Match</Link></li>
                    <li><Link to={Pages.Profile}>Profile</Link></li>
                    {
                        auth ? 
                        <>
                            <li><Link to={Pages.Login}>Logout</Link></li>
                            <li><Link to={Pages.Profile}>{user.email}</Link></li>
                        </>
                         :
                        <li><Link to={Pages.Login}>Login</Link></li>
                    }
                </ul>
            </div>
        </header>
        <div className="header-space">
            
        </div>
    </div>
}

export default Header