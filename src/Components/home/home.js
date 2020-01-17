import React, { Component } from 'react';

import './home.scss';

class Home extends Component {
    render() {
        return(
            <section className="home-wrapper">
                <div className="carousel">
                    <div className="content">
                        <h1> Hello!
                            <br></br>
                            I'm Deric.
                        </h1>
                        <div className="mail-btn">
                            <a class="px-2 py-2" href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=derickwok25@gmail.com"> let's get this bread! </a>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Home;