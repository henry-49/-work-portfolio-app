
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
import FloatinDiv from "../FloatingDiv/FloatingDiv";




const Intro = () =>  {
    
        return (
            <div className="intro">
                {/* Start Intro Left */}
               <div className="i-left">
                   <div className="i-name">
                       <span>Hi! I Am </span>
                       <span>Henry Nwadiogor</span>
                       <span> Software Developer with high level of
                            experience in producting Quality work
                            I am an enthusiastic and dedicated Software Developer with experience of writing in PHP, Python, JavaScript and SQL.
                            I am keen to continue learning new skil
                        </span>
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
                <img src={glassesimoji} alt="glassesimoji" />

                {/* Start FloatingDiv  */}
                <div style={{top: '-4%', left: '68%'}}>
                    <FloatinDiv image={Crown} txt1='Software' txt2='Developer'/>
                </div>
                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatinDiv image={thumbup} txt1='Best Design' txt2='Award'/>
                </div>
                 {/* End FloatingDiv  */}
                {/* Start blur divs */}
                    <div className="blur" 
                    style={{background: "rgb(238 210 255)"}}
                    ></div>
                    <div className="blur"
                      style={{background: '#C1F5FF',
                              top: '17rem',
                              width: '21rem',
                              height: '11rem',
                              left: '-9rem'}}>

                    </div>
                {/* End blur divs */}
               </div>
            {/* End Intro Right */}

            </div>
        );

}

export default Intro;