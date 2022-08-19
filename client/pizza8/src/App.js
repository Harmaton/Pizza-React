import React, {Component} from 'react';
import './App.css';
import { DISHES } from './shared/dish';
import Main from './components/MainComponent';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

   render(){

  return (
    <div className="App">
       <Header />
        <Main />
        <Footer />
    </div>
  );
}
}

export default App;
