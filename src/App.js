import React, { Component } from 'react';
import './App.css';
import getData from './api/getData';
import UsersList from './components/UsersList';
import UserActive from './components/UserActive';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      active: 0,
      term: ''
    }
  }


  componentDidMount() {

    getData()
    .then((result) => {
      this.setState({data: result});
    })

  }

  updateData(config) {
    this.setState(config);
  }

  render() {

    console.log('obj', getData());

    return (
      <div className="App">
          <div className="user-active">
            <UserActive data={this.state.data} active={this.state.active} />
          </div>
          <div className="users-list">
            <UsersList data={this.state.data} update={this.updateData.bind(this)} />
          </div>
      </div>
    );
  }
}

export default App;