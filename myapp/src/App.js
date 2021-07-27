import React, { useEffect, useState } from 'react';
import './App.css';
import Mesenger from './Message';
import Button from '@material-ui/core/Button';
import { List, ListItem, TextField } from '@material-ui/core';

const AUTHORS = {
  ME: 'Me',
  BOT: 'Bot'
}

function App(props) {
  const [messageList, setMessageList] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleMessageChange = (e) => {
    setInputValue(e.target.value)
  }

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
          <ListItem className="item">1 чат</ListItem>
          <ListItem className="item">2 чат</ListItem>
          <ListItem className="item">3 чат</ListItem>
          <ListItem className="item">4 чат</ListItem>
        </List>
      </div>
      <div className="chat">
        {messageList.map((message, index) => (
          <Mesenger key={index} text={message.text} author={message.author} />
        ))}
        <form onSubmit={handleMessageSubmit} className="formArea">
          <TextField fullWidth autoFocus id="filled-basic" value={inputValue} placeholder=" Введите текст..." onChange={handleMessageChange} className="text"> </TextField>
          <Button variant="contained" color="primary" type="submit">Кнопка  </Button>
        </form>
      </div>
    </section>
  );
}

export default App;
