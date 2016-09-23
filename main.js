import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Search from './Search.jsx';
import Footer from './Footer.jsx';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "Bangalore"
    };
  }

  changeInput(city) {
    this.setState({city});
  }

  render() {
    return (
      <div>
        <Header/>
        <Search changeInput={this.changeInput.bind(this)} city={this.state.city} />
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('app'));
