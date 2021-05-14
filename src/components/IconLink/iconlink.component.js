import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./iconlink.styles.scss";

function IconLink(props) {
    const { icon, href, hoverColor } = props;
    const [hovering, setHovering] = useState(false);

    return (
        <a 
            href={href} 
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            <FontAwesomeIcon 
                style={hovering ? { color: `${hoverColor}` } : null} 
                className="mediaIcons"
                icon={icon}
            />
        </a>
    )
}

export default IconLink;