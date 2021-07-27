import './App.css';

export default function Mesenger(props) {
    return (
        <div>
            <span> {props.author}: {props.text} </span>
        </div>
    );
}

