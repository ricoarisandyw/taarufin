import React from 'react';
import './App.scss';
import {hot} from 'react-hot-loader/root';

import LandingPage from './page/LandingPage';

const App:React.FC = () => {
  return (
    <div className="container-fluid p-0 App">
      <div className="row">
        <div className="col-lg-12">
          <LandingPage />
        </div>
      </div>
    </div>
  );
};

export default hot(App);
