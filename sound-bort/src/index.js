import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// JSX
const name = 'Cole Collins';
// const element = <h1>Hello, {name}</h1>;

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      error: null,
      isLoaded: false,
      items: []
    };

    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    console.log("handleClick",name)
    console.log("http://localhost:3000/play?filename=" + name)
    fetch("http://localhost:3000/play?filename=" + name)
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
    console.log(this.props.items)

    const listItems = this.props.items.map((name,index) =>
      <div key={name} class="sound" onClick={() => this.handleClick(name)}>
        <div>🔥</div>
        <div>{name}</div>
    </div>
    );
    console.log("listItems",listItems)

    return (
      <div class="grid">{listItems}</div>
    );
  }
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      error: null,
      isLoaded: false,
      items: []
    };
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

  render() {
    return (
      <div>
        <h1>SoundBort</h1>
        <p>Search : </p>
        <div class="item-grid">
          <Test items={this.state.items}/>
        </div>
  
        <div  class="button-div">
          <div class="button-1">Create Custom Board</div>
        </div>
        <div class="button-div">
        <div class="button-2">Import Clip</div>
        </div>
        <div class="button-div">
          <div class="button-3">Disconnect Bot</div>
        </div>
        <div class="button-div">
          <div class="button-4">New</div>
        </div>

        <p>For documentation visit : https://github.com/collinco/SoundBort</p>
      </div>
    );
  }
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
