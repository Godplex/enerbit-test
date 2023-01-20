import { FC, useContext, useEffect } from 'react';
import { Modal, Button } from "react-bootstrap";
import { Meter } from "../../interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import { MeterContext } from '../../context';
import { converDate } from '../../utils';
import { InputsMeter } from '.';
import { errorAlert, successAlert } from '../../alerts';

interface Props {
    show: boolean;
    handleClose: () => void;
}

export const EditMeterModal: FC<Props> = ({ show, handleClose }) => {

    const { currentMeter: meter, editMeter } = useContext(MeterContext);

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<Meter>();

    useEffect(() => {
        setValue("connection_type", meter!.connection_type);
        setValue("storage_system", meter!.storage_system);
        setValue("condition", meter!.condition);
        setValue("owner", meter!.owner);
        setValue("serial", meter!.serial);
        setValue("location", meter!.location);
        setValue("purchase", converDate(meter!.purchase));
        setValue("i_max", meter!.i_max);
        setValue("i_b", meter!.i_b);
        setValue("i_n", meter!.i_n);
        setValue("manufacturer", meter!.manufacturer);
        setValue("seals", meter!.seals);
    }, [meter, setValue])



    const onEditMeter: SubmitHandler<Meter> = async (formData) => {
        let dateFormat = new Date(Date.parse(formData.purchase));
        formData.purchase = dateFormat.toISOString();
        const { hasError, message } = await editMeter(formData, meter!.id.toString());

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
        >
            <Modal.Header closeButton>
                <Modal.Title>Meter: {meter!.id}</Modal.Title>
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
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}
