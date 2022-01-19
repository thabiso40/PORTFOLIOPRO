import React from 'react';
import Typical from 'react-typical';
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>

                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            
                        <a href='https://www.facebook.com/thabiso.vincent.399'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/thabiso-vincent-fakude-085100150/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/thabiso40'>
                            <i className='fa fa-github'></i>
                        </a>
                        <a href='https://twitter.com/Thabiso47044891'>
                            <i className='fa fa-twitter'></i>
                        </a>
                        </div>
                    </div>
                
                <div className='Profile-detail-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'm <span className='highlighted-text'> Thabiso</span>
                    </span>
                </div>
                <div className='profile-detail-role'>
                    <span className='primary-text'>
                    {" "}
                    <h1> 
                    {" "}
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Enthusiastic Dev 🔴",1000,
                                "Full stack developer 🌐",1000,
                                "XAMARIN 📱",1000,
                                "Java Developer ☕",1000,
                                "C# Developer 💻",1000,
                                "SQL DEVELOPER 📂",1000,
                                "React Developer 📱",1000,
                                
                            ]}
                        />
                    </h1>
                    <span className='profile-role-tagline'>
                        Knack for building applications with front and backend operations
                    </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className="btn primary-btn" 
                    onClick={()=> ScrollService.scrollHandler.scrollToHireMe()}
                    >
                        Hire Me
                    </button>
                    <a href='CurriculumVitae.pdf' download='CurriculumVitae.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
                </div>
                        <div className='profile-picture'>
                            <div className='profile-picture-background' >

                            </div>
                        </div>
            </div>
        </div>
    );
}
