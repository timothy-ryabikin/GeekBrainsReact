import React, { useEffect, useState } from 'react'
import Mesenger from './Message';
import { List, ListItem, TextField } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import Input from './Input'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './messages/actions';

export default function Chat(props) {
    const AUTHORS = {
        ME: 'Me',
        BOT: 'Bot'
    }

    const [messageList, setMessageList] = useState([]);

    const messages = useSelector(state => state.messages.messageList);

    const profileName = useSelector(state => state.profile.name);

    const { chatId } = useParams();

    const dispatch = useDispatch();

    const timer = React.useRef(null);

    useEffect(() => {
        if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.BOT) {
            timer.current = setTimeout(() => {
                setMessageList((currentMessageList) => [
                    ...currentMessageList,
                    { author: AUTHORS.BOT, text: "Привет!" },
                ])
            }, 1500)
        }
    }, [messageList])

    const handleMessageSubmit = (newText) => {
        dispatch(addMessage(chatId, newText));
        setMessageList((currentMessageList) => [
            ...currentMessageList,
            { author: profileName, text: newText },
        ])
    }

    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        }
    }, [])

    return (
        <div className="chat">
            <div className="chat__block">
                {messageList.map((message, index) => (
                    <Mesenger key={index} text={message.text} author={message.author} />
                ))}
                <Input onSubmitFunc={handleMessageSubmit}></Input>
            </div>
        </div>
    );
}