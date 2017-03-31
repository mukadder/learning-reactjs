/**
 * Created by mukadder on 3/31/17.
 */
import React from 'react';
import { Modal } from 'react-bootstrap';

const PhotoModal = ({ photo, show, onHide }) => (
    photo ? (
            <Modal show={show} bsSize='large' onHide={onHide}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>{photo.name} by {photo.user.username}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={photo.image_url[1]} style={{ width: '100%' }} />
                </Modal.Body>
            </Modal>
        ) : null
);

PhotoModal.propTypes = {
    photo: React.PropTypes.object,
    show: React.PropTypes.bool.isRequired,
    onHide: React.PropTypes.func.isRequired
};

export default PhotoModal;