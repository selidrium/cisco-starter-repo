import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import AddressDisplay from './AddressDisplay';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextan App" />
                <Exhibit name="Exhibit 1!"></Exhibit>
                <Exhibit name="Exhibit 2!"></Exhibit>
                <Exhibit name="Public IPv4 Address">
                    <AddressDisplay url='https://api.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Public IPv6 Address">
                    <AddressDisplay url='https://api64.ipify.org?format=json' />
                </Exhibit>
            </div>
        );
    }
}

export default App;

