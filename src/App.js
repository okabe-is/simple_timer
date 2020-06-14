import React from 'react';
import ReactDOM from 'react-dom';

import Timer from './Components/Timer'
import {TwitterTweetEmbed} from 'react-twitter-embed'

import './App.css';

function App() {
    return (
        <div className="App">
            <div>
                <h1>Simple Timer</h1>
                <Timer/>
            </div>
            <div className="footer">
                <a href="https://github.com/okabe-is/simple_timer">
                    <img
                        src="https://gh-card.dev/repos/okabe-is/simple_timer.svg"/>
                </a>
                {/*#TODO need fix layout..*/}
                <TwitterTweetEmbed tweetId="1272037174108536833"/>

            </div>
        </div>
    );
}

export default App;
