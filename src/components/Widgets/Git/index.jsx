import React from 'react'
import "./index.css"

const Git = (props) => {

const { contents } = props.payload; 

const buttonsMarkup = contents.map((option, id) => (
    <button 
        key={id}
        onClick={id === 0 ? 
            props.actionProvider.handleGitAbout : 
                props.actionProvider.handleGitFlow 
                        }
        className="blogs-button"
    >
        {option.name}
    </button>
)); 

return <div className="blogs-container">{buttonsMarkup}</div>;
};

export default Git;
