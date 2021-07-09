import './App.css';

function Mesenger(props) {
    return (
        <div>
            <span className="red">Message</span>
            <h3>your text is -  {props.text}</h3>
        </div>
    );
}

export default Mesenger;