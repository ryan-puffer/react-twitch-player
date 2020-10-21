import React from 'react';
import SearchBar from './SearchBar';
import twitch from '../apis/twitch';

class App extends React.Component {
    onTermSubmit = (term) => {
        twitch.get('/channels', {
            params: {
                query: term
            }
        })
    }

    render(){
        return (
        <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;