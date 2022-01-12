import React,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import scrollservice from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import "./AboutMe.css"

export default function AboutMe(props) {
    let fadeInScreenHandler=(screen)=>{
        if (screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription=scrollservice.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const SCREEN_CONSTANTS={
        description: "Full stack web and mobile developer with background knowledge in C# .NET,JAVA and reactjs along with a knack of building applications with utmost efficiency. Strong individual who is willing to be an asset to an organization.",
        highlights:{
            bullets:[
                "Full Stack web and mobile development",
                "Interactive Front End as per the design",
                "React Developer",
                ".NET Developer",
                "Xamarin Developer",
                "JAVA Developer",
                "Building REST API",
                "Managing database",
            ],
            heading:"Here Are A Few Highlights:"
        },
    };
    const renderHighlights=()=>{
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value,i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    };
    return (
        <div className='about-me-container screen-container' id={props.id ||''}>
                        <br/>
                        <br/>
                        <br/>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me'}/>
                    <div className='about-me-card'>
                        <div className='about-me-profile'></div>
                        <div className='about-me-details'>
                            <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                            <div className='about-me-highlights'>
                                <div className='highlight-heading'>
                                    <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                                </div>
                                {renderHighlights()}
                            </div>
                            <div className='about-me-options'>

                            <button className="btn primary-btn">
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href='CurriculumVitae.pdf' download='CurriculumVitae.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>
    );
}