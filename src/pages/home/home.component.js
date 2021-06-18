import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import IconLink from "../../components/IconLink/iconlink.component";

import "./home.styles.scss";

function Home() {
    return (
        <div className="App">
            <h1>
                Deric Kwok
            </h1>

            <div className="content">
                <p>
                    A student at Cal Poly Pomona studying Computer Science with interest in software engineering.
                </p>
                    Also a tech enthusiast, graphic design hobbyist, amateur photographer, and a walking meme. Always looking for new challenges to learn more about my field of study.
                <p>
                    Feel free to contact me if you have any opportunities you'd like to discuss or if you just want to grab some boba.
                </p>
            </div>

            <div className="media">
                <IconLink icon={faTwitter} href="https://twitter.com/notderic" hoverColor="#1DA1F2"/>
                <IconLink icon={faGithub} href="https://github.com/exelarios" hoverColor="#6f42c1"/>
                <IconLink icon={faLinkedin} href="https://linkedin.com/in/derickwok" hoverColor="#0e76a8"/>
                <IconLink icon={faEnvelope} href="mailto: derickwok25@gmail.com" hoverColor="#86888A"/>
            </div>

        </div>
    );
}

export default Home;
