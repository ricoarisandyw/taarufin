import React from 'react';
import Content from '../component/Content';
import Footer from '../component/Footer';
import Header from '../component/Header';
import './LandingPage.scss';

const LandingPage:React.FC = () => {
  return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
  );
};

export default LandingPage;
