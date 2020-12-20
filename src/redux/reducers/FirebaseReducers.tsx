import {Reducer} from 'redux'

import firebase from 'firebase/app'
import {FirebaseDispatchAction} from '../actions/FirebaseActions'
import FirebaseActionTypes from '../actions/FirebaseActionTypes'

export interface FirebaseState {
    auth?: firebase.auth.Auth,
    firestore?: firebase.firestore.Firestore
}

const actionState: FirebaseState = {}

export const firebaseReducers: Reducer<FirebaseState, FirebaseDispatchAction> = (
    state = actionState,
    action: FirebaseDispatchAction,
) => {
    switch (action.type) {
        case FirebaseActionTypes.SET_AUTH: {
            return {
                ...state,
                action: action.payload.auth || state.auth,
            }
        }
        case FirebaseActionTypes.SET_FIRESTORE: {
            return {
                ...state,
                action: action.payload.firestore || state.firestore
            }
        }
        default:
            return state
    }
}
