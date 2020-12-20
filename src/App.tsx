import React, { useEffect } from 'react';
import './App.scss';
import {hot} from 'react-hot-loader/root';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ArticlePage from './page/ArticlePage/ArticlePage';
import LandingPage from './page/LandingPage/LandingPage';
import MatchingPage from './page/MatchingPage/MatchingPage';
import Pages from './page/Pages';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import ChattingPage from './page/ChattingPage/ChattingPage';
import LoginPage from './page/LoginPage/LoginPage';
import ProfilePage from './page/ProfilePage/ProfilePage';
import ChatWidget from './component/ChatWidget/ChatWidget';

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'
import FirebaseConfig from './services/firebase/FirebaseConfig';
import { useDispatch } from 'react-redux';
import { updateAuth, updateFirestore } from './redux/actions/FirebaseActions';

firebase.initializeApp(FirebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore();

console.log("Firebase", auth, firestore)
console.log("Email", auth.currentUser)
const App:React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("Firestore", firestore)
    console.log("Auth", auth)
    dispatch(updateFirestore(firestore))
    dispatch(updateAuth(auth))
  }, [])

  return (
    <BrowserRouter>
      <div className="container-fluid p-0 App">
        <ChatWidget />
        <div className="row">
          <div className="col-lg-12">
            <Header />
            <Switch>
              <Route exact path={Pages.Home} component={LandingPage} />
              <Route exact path={Pages.Login} component={LoginPage} />
              <Route exact path={Pages.Match} component={MatchingPage} />
              <Route exact path={Pages.Article} component={ArticlePage} />
              <Route exact path={Pages.Chatting} component={ChattingPage} />
              <Route exact path={Pages.Profile} component={ProfilePage} />
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default hot(App);
