import React from 'react'
import "./index.css"

const Flow = (props) => {
    const { desc, link } = props.payload;

    return (
        <div className='about-container'>
            {desc}
    
            { link && (
                <div>
                    <br></br>
                    <a href={link} rel="noreferrer" target='_blank'>Click for more info</a>
                </div>
            ) }
        </div>
    )
}

export default Flow;