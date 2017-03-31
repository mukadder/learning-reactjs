/**
 * Created by mukadder on 3/31/17.
 */
import React from 'react';

const Thumbmnail = ({ src }) => (
    <div>
        <img src={src} />
    </div>
);

Thumbmnail.propTypes = {
    src: React.PropTypes.string.isRequired
};

export default Thumbmnail;