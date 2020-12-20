import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Pages from '../Pages'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

import { useSelector } from 'react-redux'
import { FirebaseState } from '../../redux/reducers/FirebaseReducers'
import { RootState } from '../../redux/reducers'

const LoginPage: React.FC = () => {
    const history = useHistory()
    const {auth} = useSelector<RootState, FirebaseState>((state)=>state.firebase)

    const loginByGoogle = () => {
        console.log()
        const provider = new firebase.auth.GoogleAuthProvider();
        if(auth) auth.signInWithPopup(provider);
        else firebase.auth().signInWithPopup(provider);
    }

    return <div className="d-flex p-5">
        <div className="mx-auto my-auto card p-5 shadow">
            <h2>Login</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                history.push(Pages.Profile)
            }}>
                <input className="form-control mb-3" placeholder="Username/Email" />
                <input className="form-control mb-3" type="password" placeholder="Password" />
                <input type="submit" className="btn btn-success" />
                <span className="ml-3 btn btn-light shadow" onClick={loginByGoogle}>Login by Google</span>
            </form>
            <div className="mt-3">
                <span>
                    Already have an account?
                    <Link to={Pages.Home}> Register here</Link>
                </span>
            </div>
        </div>
    </div>
}

export default LoginPage