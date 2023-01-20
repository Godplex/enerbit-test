import { AdminLayout, CreateMeterModal, TableMeter } from "../components"
import { useContext, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { MeterContext } from '../context/meter/MeterContext';

export const InventoryPage = () => {

    const { filterMeters } = useContext(MeterContext);
    const [query, setQuery] = useState('');

    const debounced = useDebouncedCallback((value) => {
        setQuery(value);
        filterMeters(value)
    }, 1000);

    const [showCreateMeter, setShowCreateMeter] = useState(false);
    const handleCloseCreateMeter = () => setShowCreateMeter(false);
    const handleShowCreateMeter = () => setShowCreateMeter(true);

    return (
        <AdminLayout>
            <div className="card">
                <div className="card-body ">
                    <div className="d-md-flex p-1">
                        <div className="me-auto">
                            <img src="/mainLogo.bea5a270.svg" alt="logo" style={{ width: 150 }} />
                        </div>
                        <div>
                            <button className="btn btn-primary w-100" onClick={handleShowCreateMeter}>Add product</button>
                            <CreateMeterModal show={showCreateMeter} handleClose={handleCloseCreateMeter} query={query} />
                            <input
                                className="form-control me-2 my-2"
                                type="search"
                                placeholder="Search"
                                onChange={(e) => debounced(e.target.value)} />
                        </div>
                    </div>
                    <TableMeter />
                </div>
            </div>
        </AdminLayout>
    )
}
