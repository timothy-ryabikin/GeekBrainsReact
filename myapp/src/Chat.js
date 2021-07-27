import { useParams } from 'react-router';
import './App.css';

export default function Chat(props) {
    const params = useParams()

    return (
        <h2>Chat id = {params.chatID}</h2>
    );
}