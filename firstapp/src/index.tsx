import  ReactDOM from "react-dom";
import React from 'react'
import { GuestList } from "./props/state/GuestList";


const App = () => {
    return (
        <div>
            <GuestList></GuestList>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));