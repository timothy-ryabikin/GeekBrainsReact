import { Switch, Route, Link } from 'react-router-dom';
import App from './App';
import './App.css';
import Chat from './Chats';
import Home from './Home';
import Profile from './profile/Profile';

export default function Router(props) {
    return (
        <>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chats">Chats</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
            <Switch>
                <Route path="/" exact render={() =>
                    <>
                        <Home
                            currentChat={props.currentChat}
                            onCurrenChatChange={props.onCurrentChatChange}
                            chats={props.chats}
                        />
                        <Chat />
                    </>
                }
                >
                </Route>

                <Route path="/chats" exact>
                    <p>Chats</p>
                </Route>

                <Route path="/chats/:chatId" render={() =>
                    <>
                        <Home
                            currentChat={props.currentChat}
                            onCurrenChatChange={props.onCurrentChatChange}
                            chats={props.chats} />
                        <Chat />
                    </>
                }>
                </Route>

                <Route path="/profile" exact>
                    <Profile />
                </Route>

                <Route>
                    404: page not found
                </Route>
            </Switch >
        </>
    );
}

