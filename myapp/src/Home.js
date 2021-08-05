import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './App.css';
import Mesenger from './Message';
import Button from '@material-ui/core/Button';
import { List, ListItem, TextField } from '@material-ui/core';
import Chat from './Chats'


export default function Home(props) {

    const { currentChat, chats, onCurrentChatChange } = props

    const history = useHistory();

    const HandleChangeLinkClick = (chat) => {
        onCurrentChatChange(chat)
        history.push(`/chats/${chat.id}`)
    }

    return (
        <section class="Messanger_Block">
            <div class="list">
                <List>
                    {chats.map((chat) => {
                        return (<Link to={`chats/${chat.id}`}>
                            <ListItem
                                className="item"
                                onclick={() => {
                                    HandleChangeLinkClick(chat)
                                }}
                                key={chat.id}
                                selected={chat.id === currentChat.id}
                            >
                                {chat.name}
                            </ListItem></Link>)
                    })}
                </List>
            </div>
            {/* <Chat /> */}
        </section >
    );
}


