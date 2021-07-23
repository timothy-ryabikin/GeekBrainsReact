import React, { useEffect, useState } from 'react';
import './App.css';
import Mesenger from './Message';

const AUTHORS = {
  ME: 'Me',
  BOT: 'Bot'
}
//testcommit
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
    <div className="App">
      <header className="App-header">
        {messageList.map((message, index) => (
          <Mesenger key={index} text={message.text} author={message.author} />
        ))}

        <form onSubmit={handleMessageSubmit}>
          <input type="text" value={inputValue} placeholder="Введите текст..." onChange={handleMessageChange} className="text" />
          <button>Отправить</button>
        </form>
      </header>
    </div>
  );
}

export default App;
