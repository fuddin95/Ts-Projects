import  ReactDOM from "react-dom";
import React from 'react'
import { GuestList } from "./state/GuestList";
import { UserSearch } from "./state/UserSearch";
import { EventComponent } from "./events/EventComponent";
import UserSearchC from "./classes/UserSearchC";
require("./index.css");

const App = () => {
    const users = [
        { name: 'zara', age: 20 },
        { name: 'fahad', age: 25 },
        { name: 'habib', age: 30 }
      ]
    return (
        <div>
            <GuestList></GuestList>
            <UserSearch user={users}></UserSearch>
            <EventComponent />
            <UserSearchC users={users}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));