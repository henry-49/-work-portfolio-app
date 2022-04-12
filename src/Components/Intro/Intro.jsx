
import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';




const Intro = () =>  {
    
        return (
            <div className="intro">
                {/* Start Intro Left */}
               <div className="i-left">
                   <div className="i-name">
                       <span>Hi! I Am </span>
                       <span>Henry Nwadiogor</span>
                       <span> Software Developer with high level of
                            experience in producting Quality work</span>
                   </div>

                   <button className="button i-button">Hire me</button>
                   <div className="i-icons">
                       <img src={Github} alt="Github" />
                       <img src={LinkedIn} alt="LinkedIn" />
                       <img src={Instagram} alt="Instagram" />
                   </div>
               </div>
                {/* End Intro Left */}

            {/* Start Intro Right */}
               <div className="i-right">
                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
                <img src={boy} alt="boy" />
               </div>
            {/* End Intro Right */}

            </div>
        );

}

export default Intro;