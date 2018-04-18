import React, { Fragment } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const UserModal = ({ userProfileData, toggleModal }) => {

    const toggle = () => {
        toggleModal();
    }

    return (
        <Fragment>
            <ModalHeader toggle={toggle}>User Name: {userProfileData.login}</ModalHeader>
            <ModalBody>
                <img src={userProfileData.avatar_url} alt={userProfileData.login} />
                <p>followers: {userProfileData.followers} | following: {userProfileData.following} | public repos: {userProfileData.public_repos}</p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Fragment>
    )
}

export default UserModal;