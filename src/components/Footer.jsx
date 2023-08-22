import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footerWrapper">
                <div>© 2023 Rahul. All rights reserved.</div>
                <div>Made with React. The library for web and native user interfaces.</div>
            </div>

            <ul>
                Contact
                <li>
                    Phone: <a href="tel:+48782041173">+919548244615</a>
                </li>
                <li>
                    e-mail:{' '}
                    <a href="mailto:begiedz.developer@gmail.com">2020kuec2069@iiitkota.ac.in</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
