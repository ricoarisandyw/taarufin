import {Action} from 'redux'

import {FirebaseState as FirebaseState} from '../reducers/FirebaseReducers'

import FirebaseActionTypes from './FirebaseActionTypes'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'
import FirebaseConfig from '../../services/firebase/FirebaseConfig'

export interface FirebaseDispatchAction extends Action<string> {
    payload: Partial<FirebaseState>
}

export const updateAuth = (auth: firebase.auth.Auth): FirebaseDispatchAction => ({
    type: FirebaseActionTypes.SET_AUTH,
    payload: { auth: auth},
})

export const updateFirestore = (firestore: firebase.firestore.Firestore): FirebaseDispatchAction => ({
    type: FirebaseActionTypes.SET_FIRESTORE,
    payload: { firestore: firestore},
})

export const initialize = () => (dispatch: any): void => {
    firebase.initializeApp(FirebaseConfig)

    const auth = firebase.auth()
    dispatch(updateAuth(auth))

    const firestore = firebase.firestore();
    dispatch()
}