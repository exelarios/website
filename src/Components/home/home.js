import React, { Component } from 'react';

import './home.css';

// Images
import LAtransportation from '../home/images/redintro.jpg';

class Home extends Component {
    render() {
        return(
            <div className="header" style={{backgroundImage: `url(${LAtransportation})`}}>
                <h1> DERIC KWOK </h1>
                <div className="wip-label"> Under Construction</div>
            </div>
        );
    }
}

export default Home;