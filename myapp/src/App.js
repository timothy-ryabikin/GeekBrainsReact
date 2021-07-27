import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Mesenger from './Message';
import Button from '@material-ui/core/Button';
import { List, ListItem, TextField } from '@material-ui/core';
import Input from './Input'

const AUTHORS = {
  ME: 'Me',
  BOT: 'Bot'
}

export default function App(props) {

  const [inputValue, setInputValue] = useState("");

  const handleMessageChange = (e) => {
    setInputValue(e.target.value)
  }

  const [messageList, setMessageList] = useState([]);

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    setMessageList((currentMessageList) => [
      ...currentMessageList,
      { author: AUTHORS.ME, text: inputValue },
    ])
    setInputValue("")
  }

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.BOT) {
      setTimeout(() => {
        setMessageList((currentMessageList) => [
          ...currentMessageList,
          { author: AUTHORS.BOT, text: "Привет!" },
        ])
      }, 1500)
    }
  }, [messageList])

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
      <div className="chat">
        <div className="chat__block">
          {messageList.map((message, index) => (
            <Mesenger key={index} text={message.text} author={message.author} />
          ))}
          {/* <Input></Input> */}
          <form onSubmit={handleMessageSubmit} className="formArea">
            <TextField fullWidth autoFocus id="filled-basic" value={inputValue} placeholder=" Введите текст..." onChange={handleMessageChange} className="text"> </TextField>
            <Button variant="contained" color="primary" type="submit">Кнопка  </Button>
          </form>
        </div>
      </div>
    </section>
  );
}


