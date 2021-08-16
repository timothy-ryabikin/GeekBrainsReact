import { useParams } from 'react-router';
import './App.css';

export default function ChatItem(props) {
    const params = useParams()

    return (
        <h2>Chat id = {params.chatId}</h2>
    );
}