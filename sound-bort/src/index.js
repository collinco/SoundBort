import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// JSX
const name = 'Cole Collins';
// const element = <h1>Hello, {name}</h1>;
    

function Test(props) {
  return (
    <div>
      <h1>SoundBort</h1>
      <p>For documentation visit : https://github.com/collinco/SoundBort</p>
      <p>Search : </p>
      <div class="grid">
          <div class="sound">
            <div>
              Icon
            </div>
            <div>
              Sword Swing #1
            </div>
            <div>
              1.53 sec
            </div>
          </div>
          <div class="sound">Sound 2</div>
          <div class="sound">Sound 3</div>
          <div class="sound">Sound 4</div>
      </div>
      <div class="grid">
          <div class="sound">Sound 1</div>
          <div class="sound">Sound 2</div>
          <div class="sound">Sound 3</div>
          <div class="sound">Sound 4</div>
      </div>
      <div class="grid">
          <div class="sound">Sound 1</div>
          <div class="sound">Sound 2</div>
          <div class="sound">Sound 3</div>
          <div class="sound">Sound 4</div>
      </div>
      <div class="grid">
          <div class="sound">Sound 1</div>
          <div class="sound">Sound 2</div>
          <div class="sound">Sound 3</div>
          <div class="sound">Sound 4</div>
      </div>
      <div class="grid">
          <div class="sound">Sound 1</div>
          <div class="sound">Sound 2</div>
          <div class="sound">Sound 3</div>
          <div class="sound">Sound 4</div>
      </div>
      <div class="grid">
          <div class="sound">Sound 1</div>
          <div class="sound">Sound 2</div>
          <div class="sound">Sound 3</div>
          <div class="sound">Sound 4</div>
      </div>

      <p>Create Custom Board</p>
      <p>Import Clip</p>
      <p>Disconnect Bot</p>

      
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
     <Test />
  </React.StrictMode>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
