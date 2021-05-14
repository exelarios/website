import './App.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function App() {
    return (
        <div className="App">
            <h1>
                Deric Kwok
            </h1>

            <div>
                <p>
                    A student at Cal Poly Pomona studying Computer Science with interest of software engineering.
                </p>
                    Also a tech enthusiast, graphic design hobbyist, amateur photographer and a walking meme.
                <p>
                    Always looking for new challenges in order to learn more about my field of study. 
                </p>
                <p>
                    Feel free to contact me if you have any opportunities you'd like to discuss or if you just want to grab some boba.
                </p>
            </div>

            <div>
                <FontAwesomeIcon className="media-icons" icon={faTwitter}/>
                <FontAwesomeIcon className="media-icons" icon={faGithub}/>
                <FontAwesomeIcon className="media-icons" icon={faLinkedin}/>
                <FontAwesomeIcon className="media-icons" icon={faEnvelope}/>
            </div>

        </div>
    );
}

export default App;
