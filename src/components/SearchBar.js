import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <input onChange={this.onInputChange} type='text' value={this.state.term}/>
                    <label htmlFor="search">Search for your favorite streamer</label>
                </form>
            </div>
        );
    }
}

export default SearchBar;