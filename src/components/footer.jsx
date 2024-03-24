import React from "react";

const Footer = () => {
    return (
        <footer>
            <ul className="footer-links" style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
                <li style={{ margin: '0 10px' }}><a href="https://github.com"><i className="fab fa-github"></i> GitHub</a></li>
                <li style={{ margin: '0 10px' }}><a href="https://linkedin.com"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                <li style={{ margin: '0 10px' }}><a href="https://twitter.com"><i className="fab fa-twitter"></i> Twitter</a></li>
                <li style={{ margin: '0 10px' }}><a href="https://instagram.com"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
