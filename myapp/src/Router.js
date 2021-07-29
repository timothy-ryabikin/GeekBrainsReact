import { Switch, Route, Link } from 'react-router-dom';
import App from './App';
import './App.css';
import ChatItem from './ChatItem';

export default function Router() {
    return (
        <>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chats">Chats</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
            <Switch>
                <Route path="/" exact component={App}>
                </Route>

                <Route path="/chats" exact>
                    <p>Chats</p>
                </Route>

                <Route path="/chats/:chatID" render={() =>
                    <ChatItem />
                }>
                </Route>

                <Route path="/profile" exact>
                    <p>Profile</p>
                </Route>

                <Route>
                    404: page not found
                </Route>
            </Switch>
        </>
    );
}

