import React from 'react'
import "./index.css"
// import datas from "../../../datas.json";

const index = (props) => {
    const { link, desc, name } = props.payload;

    return (
        <div className='about-git-container'>
            {desc}
            <br /><br />
            { link && (
                <div>
                    <br></br>
                    <a href={link} rel="noreferrer" target='_blank'>Click to learn more.</a>
                </div>
            ) }
        </div>
    )
}

export default index;