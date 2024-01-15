import React from 'react'
import "./index.css"

const About = (props) => {

    const { link, developments, desc } = props.payload;

    const buttonsMarkup = developments.map((option) => (
        <button
            key={option.id}
            onClick={option.id === 0 ? props.actionProvider.handleGitLocal : 
                                        (option.id === 1 ? props.actionProvider.handleGitStg : props.actionProvider.handleGitProd)
                                    }
            className="option-git"
        >
            {option.name}
        </button>
    )); 

    return (
        <div className='git-container'>
            {desc}
            <br /><br />
            <div className="about-git">
                <div className='git-click'>Click below for more info.</div><br></br>
                {buttonsMarkup}
            </div>

            { link && (
                <div>
                    <br></br>
                    <a href={link} rel="noreferrer" target='_blank'>Click to learn more.</a>
                </div>
            ) }
        </div>
    )
}

export default About;