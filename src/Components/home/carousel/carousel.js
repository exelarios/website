import React, { Component } from 'react';

import '../carousel/carousel.scss';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Carousel extends Component {
    render() {
        return(
            <section className="carousel-wrapper">
                <div className="content">
                    <h1> Hello!
                        <br></br>
                        I'm Deric.
                    </h1>
                    <div className="mobile-name"> deric kwok </div>
                    <ul className="media-icons">
                        <li className="icon">
                            <a href="https://twitter.com/notderic">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className="icon">
                            <a href="https://linkedin.com/in/derickwok">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li className="icon">
                            <a href="https://github.com/exelarios">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li className="icon">
                            <a href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=derickwok25@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </li>
                    </ul>

                    <div className="mail-btn">
                        <a class="px-2 py-2" href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=derickwok25@gmail.com"> let's get this bread! </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Carousel;