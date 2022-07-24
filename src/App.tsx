import React from 'react';
import './App.css';
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import FirstPage from "./FirstPage/FirstPage";

function App() {
    return (
        <div className="App">
            <FirstPage/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
