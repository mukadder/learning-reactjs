import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();

        this.state = {
            query: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.query);
    }

    render() {
        return (
            <form className='form-inline' onSubmit={this.handleSubmit.bind(this)}>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        id='search'
                        placeholder='Enter your search'
                        style={{ marginRight: '5px' }}
                        onChange={(e) => this.setState({ query: e.target.value })}
                    />
                </div>

                <button
                    type='submit'
                    className='btn btn-default'
                >
                    Search
                </button>
            </form>
        );
    }
}

SearchForm.propTypes = {
    onSearch: React.PropTypes.func.isRequired
};

export default SearchForm;