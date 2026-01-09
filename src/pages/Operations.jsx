import React from 'react';
import CurrentServices from '../components/operations/CurrentServices';
import Roadmap from '../components/operations/Roadmap';

const Operations = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <CurrentServices />
            <Roadmap />
        </div>
    );
};

export default Operations;
