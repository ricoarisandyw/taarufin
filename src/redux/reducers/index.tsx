import {combineReducers} from 'redux'

import {firebaseReducers} from './FirebaseReducers'

export const rootReducer = combineReducers({
    firebase: firebaseReducers,
})

export type RootState = ReturnType<typeof rootReducer>
