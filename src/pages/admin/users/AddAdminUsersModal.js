import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroupAddon, Label, FormGroup, CustomInput } from 'reactstrap';
import Select from 'react-select';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

class AddAdminUsersModal extends Component {
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
                        <Button className='btn btn-primary' onClick={this.toggle}>Add Admin User</Button>
                    </div>
                </Col>
                {/* Start Modal */}
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.state.className}
                    size={this.state.size}>
                    <ModalHeader toggle={this.toggle}>Add Admin User</ModalHeader>
                    <ModalBody>
                        <AvForm>
                            <AvField name="firstname" label="First Name" type="text" required />
                            <AvField name="lastname" label="Last Name" type="text" required />
                            <AvField name="email" label="Email" type="email" required />
                            <AvField name="phone" label="Phone" type="phone" required />
                            <FormGroup>
                                <Label for="exampleFile">Select Role</Label>
                                <Select
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    options={[
                                        { value: 'superadmin', label: 'Super Admin' },
                                        { value: 'logisticsadmin', label: 'Logistics Admin' },
                                        { value: 'billingadmin', label: 'Billing Admin' },
                                        { value: 'ticketadmin', label: 'Ticket Admin' },
                                    ]} required></Select>
                            </FormGroup>

                            <Button color="primary" type="submit">
                                Submit
                            </Button>
                            <Button color="secondary" className="ml-1" onClick={this.toggle}>Cancel</Button>
                        </AvForm>
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button color="primary" type="submit">Add User</Button>
                        <Button color="secondary" className="ml-1" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter> */}
                </Modal>
                {/* End Modal */}
            </div>
        );
    }
}

export default AddAdminUsersModal;