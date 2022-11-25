import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import ChatTextContainer from './ChatTextContainer';
import Messages from './Messages/Messages';
import ChatInfoBar from './ChatInfoBar';
import ChatInput from './ChatInput';
import '../../styles/Chat/Chat.css';
import { useLocation } from 'react-router-dom';

// const ENDPOINT = 'http://localhost:8008/';

let socket = io.connect('http://localhost:3001');

const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(location);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <ChatInfoBar room={room} />
        <Messages messages={messages} name={name} />
        <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <ChatTextContainer users={users} />
    </div>
  );
}

export default Chat;