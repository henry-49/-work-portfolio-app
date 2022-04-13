import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glassesimoji from '../../img/glassesimoji.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Resume.pdf';

const Services = () => {
    return (
        <div className='services'>
            {/* Start Left Side */}
            <div className="awesome">
                <span> My Awesome </span>
                <span> Services </span>
                <span> 
                    PHP, Python, JavaScript and SQL
                    <br />
                    I am keen to continue learning new skills
                </span>
                <a href={Resume} download>
                     <button className="button s-button">Download CV</button>
                </a>
               
                <div className="blur s-blur" style={{ background: "#ABF1FF94"}}></div>
            </div>
            {/* End Left Side */}
            
            {/* Start Right Side */}
            <div className="cards">
               <div style={{ left: '14rem'}}>
                   <Card 
                    emoji = {HeartEmoji}
                    heading = {'IT & Cloud Support'}
                    details = {"OS, Software Install, AWS, Photoshop, Adobe"}
                   />

               </div>
               <div style={{ top:"13rem", left: "-4rem"}}>
                   <Card 
                    emoji = {HeartEmoji}
                    heading = {'Fontend Development'}
                    details = {"HTML, CSS, Javascript, Typescript, React, Angular"}
                   />

               </div>
               <div style={{ top:"17rem", left: "12rem"}}>
                   <Card 
                    emoji = {Humble}
                    heading = {'Backend Development'}
                    details = {"PHP, Nodejs, Python"}
                   />

               </div>
            </div>
            {/* End Right Side */}
        </div>
    );
}

export default Services;