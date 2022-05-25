import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Campaign from './Campaign';
import Parts from './Parts';
import Reviews from './Reviews';
import TechFair from './TechFair';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <TechFair></TechFair>
            <Campaign></Campaign>
        </div>
    );
};

export default Home;