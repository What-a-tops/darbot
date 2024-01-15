import datas from '../datas.json';
import "./index.css";

const Persona = (props) => {

    const buttonsMarkup = datas.menus[0].contents.map((option, id) => (

        <button 
            key={id}
            onClick={id === 0 ? 
                props.actionProvider.handleReactInfo : 
                    props.actionProvider.handleHowTo 
                            }
            className="persona-button"
        >
            {option.name}
        </button>
    )); 

return <div className="personas-container">{buttonsMarkup}</div>;
};

export default Persona;
