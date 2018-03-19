import React, { Component } from 'react';
import './App.css';
import getData from './api/getData';
import UsersList from './components/UsersList';
import UserActive from './components/UserActive';
import SearchBar from './components/SearchBar';
import SortBar from './components/SortBar';

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
            this.initialData = result;
            this.setState({data: this.initialData});
        })

    }

    updateData(config) {
        this.setState(config);
        window.scrollTo( 0, 0 );
    }

    render() {

        console.log('obj', getData());

        return (
            <div className="App">
                <div>
                    <SearchBar data={this.initialData} term={this.state.term} update={this.updateData.bind(this)} />
                    <SortBar initialData={this.initialData} data={this.initialData} update={this.updateData.bind(this)} />
                </div>
                <div className="user-active">
                    <UserActive data={this.initialData} active={this.state.active} />
                </div>
                <div className="users-list">
                    <UsersList data={this.state.data} update={this.updateData.bind(this)} scrollStepInPx="50" delayInMs="16.66" />
                </div>
            </div>
        );
    }
}

export default App;