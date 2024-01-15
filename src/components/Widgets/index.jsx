import React from "react";

import "./index.css";
import datas from "../../chatbot/datas.json";

const Widgets = (props) => {
    const buttonsMarkup = datas.map((option) => (
        <button
            key={option.id}
            onClick={option.id === 1 ? 
                props.actionProvider.handleReactInfo : 
                    (option.id === 2 ? props.actionProvider.handleGitInfo 
                            : props.actionProvider.handleJsInfo)}
            className="option-button"
        >
            {option.name}
        </button>
    )); 

return (
        <>
            <div className="options-container">{buttonsMarkup}</div>
        </>
    )
};

export default Widgets;
