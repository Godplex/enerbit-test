import { FC, useContext } from 'react';
import { Modal, Button } from "react-bootstrap";
import { errorAlert, successAlert } from '../../alerts';
import { MeterContext } from '../../context';

interface Props {
    show: boolean;
    handleClose: () => void;
}

export const DeleteMeterModal: FC<Props> = ({ show, handleClose }) => {

    const { currentMeter: meter, deleteMeter } = useContext(MeterContext);

    const onDeleteMeter = async () => {
        const { hasError, message } = await deleteMeter(meter!.id.toString());
        handleClose();

        if (hasError) {
            errorAlert(message);
            return;
        }

        successAlert(message);

    }

    return (
        <Modal
            show={!!show}
            onHide={handleClose}
            size="sm"
            keyboard={false}
            backdrop="static"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Meter: {meter!.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to remove the serial: <b>{meter!.serial}</b>?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    No
                </Button>
                <Button variant="primary" onClick={onDeleteMeter}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
