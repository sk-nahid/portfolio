import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="text-center py-6 bg-base-300 text-base-content">
                © {new Date().getFullYear()} S.K. Nahid. All rights reserved.
            </footer>
        </div>
    );
};

export default Footer;
