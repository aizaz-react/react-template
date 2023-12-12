import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="#">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li className="has-droupdown"><Link to="#">Contact</Link></li>
            {/* <li className="has-droupdown"><Link to="#">Portfolio</Link></li> */}
            {/* <li className="with-megamenu"><Link to="#">Service</Link></li>
            <li className="has-droupdown"><Link to="#">Blog</Link></li> */}
        </ul>
    )
}
export default Nav;
