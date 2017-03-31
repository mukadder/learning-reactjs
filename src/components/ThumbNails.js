import React from 'react';

import Thumbmnail from './Thumbnail';

const Thumbmnails = ({ photos, onClick }) => (
    <div>
        { photos.map(photo => (
            <div
                key={photo.id}
                style={{
                    float: 'left',
                    marginRight: '10px',
                    marginBottom: '10px',
                }}
            >
                <a onClick={() => onClick(photo)} style={{ cursor: 'pointer' }}>
                    <Thumbmnail src={photo.image_url[0]} />
                </a>
            </div>
        ))}
    </div>
);

Thumbmnails.propTypes = {
    photos: React.PropTypes.array.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default Thumbmnails;