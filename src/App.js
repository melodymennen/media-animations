import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      animationOn: false
    }
  }

toggleAnimation(){
  this.setState({animationOn: !this.state.animationOn})
}

  render() {
    return (
      <div className="App">
       <section className="nav navslide">
          <div>
            START BOOTSTRAP
          </div>
          <div>
            <div className="menu-text">ABOUT DOWNLOAD CONTACT</div>
            <button className="menu-btn">MENU</button>
          </div>
       </section>
       <div className="content">
          <h1> CSS ANIMATIONS</h1>
          <div className={this.state.animationOn ? "square animation1" : "square"}></div>
          <button onClick={() => this.toggleAnimation()}>Click Me</button>
          <div className="circle animation2"><span>*******</span></div>
       </div>
      </div>
    );
  }
}

export default App;
