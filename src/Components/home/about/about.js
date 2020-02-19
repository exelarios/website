import React, { Component } from 'react';

import './../about/about.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

class About extends Component {
    render() {
        return(
            <section className="about-wrapper">
                <div className="content row justify-content-center pb-5">
                    <div className="title col-md-3 px-5"> about </div>
                    <div className="description col-md-4 px-5">
                        <p> 
                            An aspiring software developer based in Los Angeles, that focus primarily on frontend development.
                            Currently a sophomore working towards for a Computer Science degree, while striving to become a full stack developer.
                        </p>
                        <p>
                            Also a tech enthusiast, graphic design hobbyist, amateur photographer and a walking meme.
                        </p>
                        <p>
                            Always looking for new challenges in order to learn more about my field of study through projects. 
                            Feel free to contact me if you have any opportunities you'd like to discuss or if you just want to grab some boba.
                        </p>
                    </div>
                    <div className="media col-md-4">
                        <div className="justify-content-center d-flex">
                            <div className="content">
                                <div> let's talk </div>
                                <ul className="media-listing">
                                    <li>
                                        <a href="https://linkedin.com/in/derickwok"> linkedin </a>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </li>
                                    <li> 
                                        <a href="https://github.com/exelarios"> github </a>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/notderic"> twitter </a>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </li>
                                    <li>
                                        <a href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=derickwok25@gmail.com"> mail </a>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;