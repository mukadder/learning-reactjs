import React from 'react';

import SearchForm from './SearchForm';
import Thumbnails from './Thumbnails';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            photos: []
        };
    }

    search = (query) => {
        const apiUrl = `https://api.500px.com/v1/photos/search?consumer_key=Qv4sZxFpKWYqcuK5fcX6t1FkOPS2RBmXDYjPg5I2&image_size[]=3&image_size[]=4&term=${query}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(json => {
                this.setState({ photos: json.photos });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        const { photos } = this.state;
        const { onShowPhoto } = this.props;

        return (
            <div>
                <div
                    style={{
                        marginBottom: '20px'
                    }}
                >
                    <SearchForm onSearch={this.search} />
                </div>

                <Thumbnails photos={photos} onClick={onShowPhoto} />
            </div>
        );
    }
}

Search.propTypes = {
    onShowPhoto: React.PropTypes.func.isRequired
};

export default Search;