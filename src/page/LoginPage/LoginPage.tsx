import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Pages from '../Pages'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

import FirebaseConfig from '../../services/firebase/FirebaseConfig';

const auth = firebase.auth()
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const LoginPage: React.FC = () => {
    const history = useHistory()

    const loginByGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
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
                <button className="ml-3 btn btn-light shadow" onClick={loginByGoogle}>Login by Google</button>
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