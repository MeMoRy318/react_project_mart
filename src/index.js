import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import {setUpstore} from "./redux";
import {ThemaContext} from "./context";


const root = ReactDOM.createRoot(document.getElementById('root'));

let store = setUpstore();

function Main() {
    const [thema,setThema] = useState('dark');
    return(
        <Provider store={store}>
            <BrowserRouter>
                <ThemaContext.Provider value={{thema,setThema}}>
                    <App />
                </ThemaContext.Provider>
            </BrowserRouter>
        </Provider>
    )

}

root.render(
<Main/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
