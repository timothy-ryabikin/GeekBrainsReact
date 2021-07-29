import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Mesenger from './Message';
import Button from '@material-ui/core/Button';
import { List, ListItem, TextField } from '@material-ui/core';
import Chats from './Chats'


export default function App(props) {

  // useEffect(() => {
  //   if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.BOT) {
  //     setTimeout(() => {
  //       setMessageList((currentMessageList) => [
  //         ...currentMessageList,
  //         { author: AUTHORS.BOT, text: "Привет!" },
  //       ])
  //     }, 1500)
  //   }
  // }, [messageList])

  return (
    <section className="Messanger_Block">
      <div className="list">
        <List>
          <Link to="/chats/1"><ListItem className="item">Чат 1</ListItem></Link>
          <Link to="/chats/2"><ListItem className="item">Чат 2</ListItem></Link>
          <Link to="/chats/3"><ListItem className="item">Чат 3</ListItem></Link>
          <Link to="/chats/4"><ListItem className="item">Чат 4</ListItem></Link>
        </List>
      </div>
      <Chats />
    </section>
  );
}


