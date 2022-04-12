import React from 'react';
import './Navbar.css';

const  Navbar = () => {
    return (
        <div className="n-wrapper">
             {/* Start Nav Left */}
            <div className="n-left">
                <div className="n-name">Henry</div>
                <span>toggle</span>
            </div>
             {/* End Nav Left */}

            {/* Start Nav Right */}
            <div className="n-right">
                {/* Start List */}
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                {/* End List */}
                <button className="button">Contact Us</button>
            </div>
            {/* End Nav Right */}
        </div>
    );
}

export default Navbar;