import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from 'react';

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button primary onClick = {handleClose}>Accept</Button>
    </div>;

    const modal = <Modal 
        onClose = {handleClose} 
        actionBar = {actionBar}
    >
        <p>
            The modal content or main body of the Modal is displayed here.
        </p>
    </Modal>;

    return (
        <div className = "relative">
            <Button onClick = {handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    );
};

export default ModalPage;