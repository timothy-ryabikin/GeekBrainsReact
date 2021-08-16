import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import './App.css';
import { Provider, useDispatch, useSelector } from "react-redux";
import Router from './Router';
import store from './Store';


export default function App(props) {

  const [chats, setChats] = useState([
    { id: 'chat1', name: 'Чат 1' },
    { id: 'chat2', name: 'Чат 2' },
    { id: 'chat3', name: 'Чат 3' }
  ]);

  const [currentChat, setCurrentChat] = useState(chats[0]);

  const handleChangeChat = (chat) => { setCurrentChat(chat) };

  const handleIsChatExist = React.useCallback((chatId) => {
    return Boolean(chats.find((chat) => chat.id === chatId))
  }, [chats])

  return (
    <Provider store={store}>
      <Router getIsChatExist={handleIsChatExist} chats={chats} currentChat={currentChat} onCurrentChatChange={setCurrentChat} />
    </ Provider>
  );
}


