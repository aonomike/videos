import React from 'react'

class SearchBar extends React.Component {
    state = {term: ''}
    
    onTextChange = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onFormSubmit(this.state.term)
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit = {this.onFormSubmit} >
                    <div className="field">
                        <label>Search Video</label>
                        <input type="text" onChange = {this.onTextChange} value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;