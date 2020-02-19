import React, { Component } from 'react';

import './home.scss';

// Import Components
import Carousel from './carousel/carousel';
import About from './about/about';

class Home extends Component {
    render() {
        return(
            <section className="home-wrapper">
                <Carousel/>
                <About/>
            </section>
        );
    }
}

export default Home;