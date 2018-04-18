import React, { Component } from 'react';
import { Button, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserModal from './UserModal';
class UserCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userProfileData: null,
            modal: false
        }

        this.toggle = this.toggle.bind(this);
    }

    async toggle(url) {
        if (url) {
            const userProfileData = await fetch(url).then(response => response.json()).then(data => data);
            this.setState({
                userProfileData,
                modal: true
            });
        } else {
            this.setState({
                userProfileData: {},
                modal: false
            });
        }
        
    }


    render() {
        const { data } = this.props;
        const { userProfileData } = this.state;
        const userCards = data.map(user => 
            <Col lg="3" md="4" sm="6" xs="12" key={user.id} className="mb-3">
                <Card>
                    <CardImg top width="100%" src={user.avatar_url} alt={user.login} />
                    <CardBody>
                        <CardTitle>{user.login}</CardTitle>
                        <CardSubtitle><Button color="link" onClick={() => this.toggle(user.url)}>Profile</Button> | <Button color="link">Repos</Button></CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
            );
        return (
            <Row>
                {userCards}
                {userProfileData ? (
                <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
                    <UserModal userProfileData={userProfileData} toggleModal={this.toggle} />
                </Modal>
                ) : ''}
            </Row>
        );
    }
}

export default UserCards;