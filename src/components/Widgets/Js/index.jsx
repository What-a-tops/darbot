import React from 'react'
import "./index.css"

const JsInfo = (props) => {
    const { contents } = props.payload;
    console.log('aa')
    const buttonsMarkup = contents.map((option, id) => (
        <button 
            key={id}
            onClick={id === 0 ? 
                props.actionProvider.handleAboutJs : 
                        (id === 1 ? props.actionProvider.handleJsFramework : props.actionProvider.handleJQuery)
                            }
            className="yam-button"
        >
            {option.name}
        </button>
    )); 

    return <div className="yam-container">{buttonsMarkup}</div>;
};

export default JsInfo;
