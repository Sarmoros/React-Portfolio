import React from "react";

const Footer = () => {
    return (
        <footer>
            <ul className="footer-links" style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
                <li style={{ margin: '0 10px' }}><a href="https://github.com/Sarmoros"><i className="fab fa-github"></i> GitHub</a></li>
                <li style={{ margin: '0 10px' }}><a href="https://www.linkedin.com/in/sarahy-moros-25324627b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BPL6uL%2BJWQdWHOwXswcYe9w%3D%3D"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                <li style={{ margin: '0 10px' }}><a href="https://www.instagram.com/sarahy.ta/"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
