import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Mesenger from './Message';
import Button from '@material-ui/core/Button';
import { List, ListItem, TextField } from '@material-ui/core';
import Chats from './Chats'


export default function App(props) {

  const [chats, setChats] = useState([
    { id: 'chat1', name: 'Чат 1' },
    { id: 'chat2', name: 'Чат 2' },
    { id: 'chat3', name: 'Чат 3' }]);

  const [currentChat, setCurrentChat] = useState(chats[0]);

  const handleChangeChat = (chat) => { setCurrentChat(chat) };

  return (
    <section class="Messanger_Block">
      <div class="list">
        <List>
          {chats.map((chat) => {
            return (<Link to="chats/${chat.id}"><ListItem className="item" onclick={() => handleChangeChat(chat)}>{chat.name}</ListItem></Link>) //с ссылкой не выходит пока
          })}
        </List>
      </div>
      <Chats />
    </section >
  );
}


