import React from 'react';
import stl from './Main.module.css'
const Main = () => {
    return (
        <div className={stl.wrapper}>
          <div className={stl.container}>
              <div className={stl.text}>
                  <div >Hi,there!</div>
                  <h1>I am Zherdev Maxim</h1>
                  <div>a Web developer</div>
              </div>
              <div className={stl.photo}>

              </div>
          </div>
        </div>
    );
};

export default Main;