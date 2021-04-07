import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// JSX
const name = 'Cole Collins';
// const element = <h1>Hello, {name}</h1>;

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      error: null,
      isLoaded: false,
      items: []
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/clips")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  componentWillUnmount() {
  }

  handleClick() {
    console.log("handleClick")
    fetch("http://localhost:3000/play?filename=Malphite_Select.mp3")
    .then(res => res.json())
    .then(
      (result) => {
        console.log("handleClick")
        console.log(result)
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }

  render() {
    return (
      <div>
        <h1>SoundBort</h1>
        <p>For documentation visit : https://github.com/collinco/SoundBort</p>
        <p>Search : </p>
        <div class="grid">
            <div class="sound">
              <div>Icon</div>
              <div>Sword Swing #1</div>
              <div>1.53 sec</div>
            </div>
            <div class="sound" onClick={this.handleClick}>
              <div>Icon #2</div>
              <div>{this.state.items[1]}</div>
              <div>1.01 sec</div>
            </div>
            <div class="sound">
              <div>Icon #4</div>
              <div>Sound 3</div>
              <div>1314.11 sec</div>
            </div>
            <div class="sound">
              <div>Icon #3</div>
              <div>Sound 4</div>
              <div>12.01 sec</div>
            </div>
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
        <p>New</p>
        
      </div>
    );
  }
}
    

function Test(props) {
  return (
    <div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
     <Grid />
  </React.StrictMode>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
