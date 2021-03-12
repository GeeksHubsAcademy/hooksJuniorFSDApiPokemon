
import React from 'react';

import {useHistory} from 'react-router-dom';

import './Home.css';

const Home = () => {

    let history = useHistory();

    const llevameProfile = () => {
        history.push('/profile');
    }

    return(
        <div>
            SOY HOME-R SIMPSON
            <button onClick={()=> llevameProfile()}>Profile</button>
        </div>
    )   
}

export default Home;