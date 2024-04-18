import React, { useContext } from 'react';
import { HomeContext } from '../Home/Home';

const InsideHome = () => {
    const homeData = useContext(HomeContext)
    return (
        <div>
            <h1>This is InsideHome</h1>
        </div>
    );
};

export default InsideHome;