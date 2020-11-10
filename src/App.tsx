import React from 'react';
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

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid p-0 App">
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
