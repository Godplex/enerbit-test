import { FC, useContext } from 'react';
import { Modal, Button } from "react-bootstrap";
import { Meter } from "../../interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import { MeterContext } from '../../context';
import { InputsMeter } from '.';
import { errorAlert, successAlert } from '../../alerts';

interface Props {
    show: boolean;
    handleClose: () => void;
    query: string
}

export const CreateMeterModal: FC<Props> = ({ show, handleClose, query }) => {

    const { createMeter } = useContext(MeterContext);

    const { register, handleSubmit, formState: { errors } } = useForm<Meter>();

    const onEditMeter: SubmitHandler<Meter> = async (formData) => {
        let dateFormat = new Date(Date.parse(formData.purchase));
        formData.purchase = dateFormat.toISOString();
        const { hasError, message } = await createMeter(query, formData);

        handleClose();

        if (hasError) {
            errorAlert(message);
            return;
        }

        successAlert(message);

    };

    return (
        <Modal
            show={!!show}
            onHide={handleClose}
            size="xl"
            keyboard={false}
            backdrop="static"
            scrollable
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Meter</Modal.Title>
            </Modal.Header>
            <form
                onSubmit={handleSubmit(onEditMeter)}
                noValidate
            >
                <Modal.Body className="row">
                    <InputsMeter errors={errors} register={register} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}
