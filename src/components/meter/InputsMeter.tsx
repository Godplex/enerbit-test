import { FC } from "react"
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { Condition, ConnectionType, Meter, Owner, StorageSystem } from "../../interfaces";

interface Props {
    errors: Partial<FieldErrorsImpl<Meter>>
    register: UseFormRegister<Meter>
}

export const InputsMeter: FC<Props> = ({ errors, register }) => {
    return (
        <>
            <div className="form-group col-lg-3 col-md-6 mb-3">
                <label htmlFor="connectionType" className="form-label">Connection Type</label>
                <select
                    className={`form-select ${errors.connection_type ? 'is-invalid' : ''}`}
                    id="connectionType"
                    {...register("connection_type", {
                        required: "Este campo es requerido.",
                    })}
                >
                    {
                        Object.entries(ConnectionType).map(([key, value]) => (
                            <option value={`${value}`} key={key}>{key}</option>
                        ))

                    }
                </select>
                {
                    errors.connection_type
                    &&
                    <div className="invalid-feedback">
                        {errors.connection_type?.message}
                    </div>
                }
            </div>
            <div className="form-group col-lg-3 col-md-6 mb-3">
                <label htmlFor="storageSystem" className="form-label">Storage System</label>
                <select
                    className={`form-select ${errors.storage_system ? 'is-invalid' : ''}`}
                    id="storageSystem"
                    {...register("storage_system", {
                        required: "Este campo es requerido.",
                    })}
                >
                    {
                        Object.entries(StorageSystem).map(([key, value]) => (
                            <option value={`${value}`} key={key}>{key}</option>
                        ))

                    }
                </select>
                {
                    errors.storage_system
                    &&
                    <div className="invalid-feedback">
                        {errors.storage_system?.message}
                    </div>
                }
            </div>
            <div className="form-group col-lg-3 col-md-6 mb-3">
                <label htmlFor="condition" className="form-label">Condition</label>
                <select
                    className={`form-select ${errors.condition ? 'is-invalid' : ''}`}
                    id="condition"
                    {...register("condition", {
                        required: "Este campo es requerido.",
                    })}
                >
                    {
                        Object.entries(Condition).map(([key, value]) => (
                            <option value={`${value}`} key={key}>{key}</option>
                        ))

                    }
                </select>
                {
                    errors.condition
                    &&
                    <div className="invalid-feedback">
                        {errors.condition?.message}
                    </div>
                }
            </div>
            <div className="form-group col-lg-3 col-md-6 mb-3">
                <label htmlFor="owner" className="form-label">Owner</label>
                <select
                    className={`form-select ${errors.owner ? 'is-invalid' : ''}`}
                    id="owner"
                    {...register("owner", {
                        required: "Este campo es requerido.",
                    })}
                >
                    {
                        Object.entries(Owner).map(([key, value]) => (
                            <option value={`${value}`} key={key}>{key}</option>
                        ))

                    }
                </select>
                {
                    errors.owner
                    &&
                    <div className="invalid-feedback">
                        {errors.owner?.message}
                    </div>
                }
            </div>
            <div className="form-group col-lg-3 col-md-6 mb-3">
                <label htmlFor="serial" className="form-label">Serial</label>
                <input
                    type="text"
                    className={`form-control ${errors.serial ? 'is-invalid' : ''}`}
                    id="serial"
                    {...register("serial", {
                        required: "Este campo es requerido.",
                    })}
                />
                {
                    errors.serial
                    &&
                    <div className="invalid-feedback">
                        {errors.serial?.message}
                    </div>
                }
            </div>
            <div className="form-group col-lg-3 col-md-6 mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input
                    type="text"
                    className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                    id="location"
                    {...register("location", {
                        required: "Este campo es requerido.",
                    })}
                />
                {
                    errors.location
                    &&
                    <div className="invalid-feedback">
                        {errors.location?.message}
                    </div>
                }
            </div>
            <div className="form-group col-lg-3 col-md-6 mb-3">
                <label htmlFor="purchase" className="form-label">Purchase</label>
                <input
                    type="date"
                    className={`form-control ${errors.purchase ? 'is-invalid' : ''}`}
                    id="purchase"
                    {...register("purchase", {
                        required: "Este campo es requerido.",
                    })}
                />
                {
                    errors.purchase
                    &&
                    <div className="invalid-feedback">
                        {errors.purchase?.message}
                    </div>
                }
            </div>
            <div className="form-group col-lg-3 col-md-6 mb-3">
                <label htmlFor="iMax" className="form-label">I Max</label>
                <input
                    type="number"
                    className={`form-control ${errors.i_max ? 'is-invalid' : ''}`}
                    min={0}
                    step={0.001}
                    id="iMax"
                    {...register("i_max", {
                        required: "Este campo es requerido.",
                        min: "El valor minimo es de cero."
                    })}
                />
                {
                    errors.i_max
                    &&
                    <div className="invalid-feedback">
                        {errors.i_max?.message}
                    </div>
                }
            </div>
            <div className="form-group col-lg-3 col-md-6 mb-3">
                <label htmlFor="iB" className="form-label">I B</label>
                <input
                    type="number"
                    className={`form-control ${errors.i_b ? 'is-invalid' : ''}`}
                    min={0}
                    id="iB"
                    step={0.001}
                    {...register("i_b", {
                        required: "Este campo es requerido.",
                        min: "El valor minimo es de cero."
                    })}
                />
                {
                    errors.i_b
                    &&
                    <div className="invalid-feedback">
                        {errors.i_b?.message}
                    </div>
                }
            </div>
            <div className="form-group col-lg-3 col-md-6 mb-3">
                <label htmlFor="iN" className="form-label">I N</label>
                <input
                    type="number"
                    className={`form-control ${errors.i_n ? 'is-invalid' : ''}`}
                    min={0}
                    id="iN"
                    step={0.001}
                    {...register("i_n", {
                        required: "Este campo es requerido.",
                        min: "El valor minimo es de cero."
                    })}
                />
                {
                    errors.i_n
                    &&
                    <div className="invalid-feedback">
                        {errors.i_n?.message}
                    </div>
                }
            </div>
            <div className="form-group col-lg-3 col-md-6 mb-3">
                <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
                <input
                    type="text"
                    className={`form-control ${errors.manufacturer ? 'is-invalid' : ''}`}
                    id="manufacturer"
                    {...register("manufacturer", {
                        required: "Este campo es requerido.",
                    })}
                />
                {
                    errors.manufacturer
                    &&
                    <div className="invalid-feedback">
                        {errors.manufacturer?.message}
                    </div>
                }
            </div>
            <div className="form-group col-lg-3 col-md-6 mb-3">
                <label htmlFor="seals" className="form-label">Seals</label>
                <input
                    type="number"
                    className={`form-control ${errors.seals ? 'is-invalid' : ''}`}
                    min={0}
                    step={0.001}
                    id="seals"
                    {...register("seals", {
                        required: "Este campo es requerido.",
                        min: "El valor minimo es de cero."
                    })}
                />
                {
                    errors.seals
                    &&
                    <div className="invalid-feedback">
                        {errors.seals?.message}
                    </div>
                }
            </div>
        </>
    )
}
