import "./index.css"

const Contents = (props) => {
    const { desc, link } = props.payload.contents;

    return (
        <div className='js-container'>
            {desc}
    
            { link && (
                <div>
                    <br></br>
                    <a href={link} rel="noreferrer" target='_blank'>Click to learn more.</a>
                </div>
            ) }
        </div>
    )
};

export default Contents;
