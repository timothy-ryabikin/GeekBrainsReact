import './App.css';

function Mesenger(props) {
    return (
        <div>
            <span> {props.author}: {props.text} </span>
        </div>
    );
}

export default Mesenger;