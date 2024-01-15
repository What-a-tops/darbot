import React from 'react'
import "./index.css"

const About = (props) => {
    const { desc, link } = props.payload;

    return (
        <div className='about-container'>
            {desc}
    
            { link && (
                <div>
                    <br></br>
                    <a href={link} rel="noreferrer" target='_blank'>Click to visit</a>
                </div>
            ) }
        </div>
    )
}

export default About;