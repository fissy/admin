import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroupAddon, Label, FormGroup, CustomInput } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';

class EditRidersModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
        this.openModalWithSize = this.openModalWithSize.bind(this);
        this.openModalWithClass = this.openModalWithClass.bind(this);
    }

    /**
     * Show/hide the modal
     */
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    };

    /**
     * Opens large modal
     */
    openModalWithSize = size => {
        this.setState({ size: size, className: null });
        this.toggle();
    };

    /**
     * Opens modal with custom class
     */
    openModalWithClass = className => {
        this.setState({ className: className, size: null });
        this.toggle();
    };

    render() {
        return (
            <div>
                <Col xl={12}>
                    <div className="button-list">
                        <Button className='btn btn-primary' onClick={() => this.openModalWithSize('lg')}>Edit</Button>
                    </div>
                </Col>
                {/* Start Modal */}
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.state.className}
                    size={this.state.size}>
                    <ModalHeader toggle={this.toggle}>Edit Rider</ModalHeader>
                    <ModalBody>
                        <AvForm onSubmit={this.handleSubmit}>
                            <Row>
                                {/* First Name */}
                                <Col xs="12" sm="6">
                                    {/* With AvGroup AvInput and AvFeedback to build your own */}
                                    <AvGroup>
                                        <Label for="firstname">First Name</Label>
                                        {/* dot notation for the name to access deep values. The shape is also the same in the submit callbacks */}
                                        <AvInput name="firstname" type="text" id="firstname" required />
                                        {/* this only shows when there is an error, use reactstrap's FormFeedback if you want is to always be displayed */}
                                        <AvFeedback>This is an error!</AvFeedback>
                                    </AvGroup>
                                </Col>
                                {/* Last Name */}
                                <Col xs="12" sm="6">
                                    <AvGroup>
                                        <Label for="lastname">Last Name</Label>
                                        <AvInput name="lastname" id="lastname" type="text" required />
                                        <AvFeedback>This is an error!</AvFeedback>
                                    </AvGroup>
                                </Col>
                                {/* Company Name */}
                                <Col xs="12" sm="6">
                                    <AvGroup>
                                        <Label for="companyname">Company Name</Label>
                                        <AvInput name="companyname" type="text" id="companyname" required />
                                        <AvFeedback>This is an error!</AvFeedback>
                                    </AvGroup>
                                </Col>
                                {/* Email */}
                                <Col xs="12" sm="6">
                                    <AvGroup>
                                        <Label for="email">Email</Label>
                                        <AvInput name="email" id="email" type="email" required />
                                        <AvFeedback>This is an error!</AvFeedback>
                                    </AvGroup>
                                </Col>
                                {/* Phone */}
                                <Col xs="12" sm="6">
                                    <AvGroup>
                                        <Label for="phone">Phone</Label>
                                        <AvInput name="phone" id="phone" required />
                                        <AvFeedback>This is an error!</AvFeedback>
                                    </AvGroup>
                                </Col>
                                {/* Taxi Count */}
                                <Col xs="12" sm="6">
                                    <AvGroup>
                                        <Label for="taxicount">Taxi Count</Label>
                                        <AvInput name="taxicount" id="taxicount" required />
                                        <AvFeedback>This is an error!</AvFeedback>
                                    </AvGroup>
                                </Col>
                                {/* Signup Date &amp; Time */}
                                <Col xs="12" sm="6">
                                    <div className="form-group" required>
                                        <label>Signup Date &amp; Time</label> <br />
                                        <Flatpickr value={new Date()} options={{enableTime: true}}
                                            onChange={date => { console.log(date) }}
                                            className="form-control" required />
                                    </div>
                                </Col>
                                {/* Wallet Balance */}
                                <Col xs="12" sm="6">
                                    <AvField name="walletbalance" label="Wallet Balance" required />
                                </Col>
                                {/* Document */}
                                <Col lg={6}>
                                    <FormGroup>
                                        <Label for="exampleFile">Document</Label>
                                        <Input type="file" name="file" id="exampleFile" required />
                                    </FormGroup>
                                </Col>
                                {/* Status */}
                                <Col xl={6}>
                                    <Label for="exampleFile">Status</Label>
                                    <Select
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        options={[
                                            { value: 'ongoing', label: 'Ongoing' },
                                            { value: 'pending', label: 'Pending' },
                                            { value: 'verified', label: 'Verified' },
                                        ]} required></Select>
                                </Col>
                            </Row>
                            <hr></hr>
                            <Button color="primary" type="submit"> Submit </Button>
                            <Button color="secondary" className="ml-1" onClick={this.toggle}>Cancel</Button>
                        </AvForm>
                    </ModalBody>
                </Modal>
                {/* End Modal */}
            </div>
        );
    }
}

export default EditRidersModal;