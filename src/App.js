import React from 'react';
import styles from './App.module.css'
import {Route} from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";

function App({data}) {
    return (
        <div className={styles.appWrapper}>
            <Route exact path="/" render={() => <Home/>}/>
            <Route exact path="/play" render={() => <Game data={data}/>}/>
        </div>
    );
}

export default App;
