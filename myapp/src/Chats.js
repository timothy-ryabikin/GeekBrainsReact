import React, { useEffect, useState } from 'react'
import Mesenger from './Message';
import Input from './Input'

export default function Chat(props) {
    const AUTHORS = {
        ME: 'Me',
        BOT: 'Bot'
    }

    const [messageList, setMessageList] = useState([]);

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
        setMessageList((currentMessageList) => [
            ...currentMessageList,
            { author: AUTHORS.ME, text: newText },
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
                <Input onSubmit={handleMessageSubmit}></Input>
            </div>
        </div>
    );
}