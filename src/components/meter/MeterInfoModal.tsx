import { FC, useContext } from "react";
import { Modal, Button } from "react-bootstrap"
import { MeterContext } from "../../context";
import { Meter } from "../../interfaces";

interface Props {
    show: boolean;
    handleClose: () => void;
    handleShowEditMeter: (meter: Meter) => void
    handleShowDeleteMeter: (meter: Meter) => void
}
export const MeterInfoModal: FC<Props> = ({ show, handleClose, handleShowEditMeter, handleShowDeleteMeter }) => {

    const { currentMeter: meter } = useContext(MeterContext);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            scrollable
        >
            <Modal.Header closeButton>
                <Modal.Title>Meter Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    Object.entries(meter!).map(([key, value]) => {
                        if (!value) return null;
                        return <p className="text-capitalize" key={key}>
                            <span className="fw-bold">{key}: </span>
                            {value}
                        </p>
                    })
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => handleShowEditMeter(meter!)}>
                    Edit
                </Button>
                <Button variant="danger" onClick={() => handleShowDeleteMeter(meter!)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
