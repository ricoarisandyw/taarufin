import React from 'react';
import FirstSection from '../../component/FirstSection/FirstSection';
import GallerySection from '../../component/GallerySection/GallerySection';
import InfoSection from '../../component/InfoSection/InfoSection';
import NewsSection from '../../component/NewsSection/NewsSection';

import './LandingPage.scss';

const LandingPage:React.FC = () => {
  return (
    <div>
        <FirstSection />
        <InfoSection />
        <NewsSection />
        <GallerySection />
    </div>
  );
};

export default LandingPage;
