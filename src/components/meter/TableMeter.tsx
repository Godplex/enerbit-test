import { useContext, useState } from 'react';
import { MeterContext } from '../../context/';
import { DeleteMeterModal, EditMeterModal, LoadingMeter, MeterInfoModal, MeterRowItem } from '.';
import { TableFooter } from './TableFooter';
import { useTable } from '../../hooks';
import { Meter } from '../../interfaces';

export const TableMeter = () => {

    const { filteredMeters, isLoading, currentMeter, loadCurrentMeter } = useContext(MeterContext)

    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const { slice, range } = useTable(filteredMeters, page, rowsPerPage);

    const [showMeterInfo, setShowMeterInfo] = useState(false);
    const handleCloseMeterInfo = () => setShowMeterInfo(false);
    const handleShowMeterInfo = (meter: Meter) => {
        loadCurrentMeter(meter);
        setShowMeterInfo(true)
    };

    const [showEditMeter, setShowEditMeter] = useState(false);
    const handleCloseEditMeter = () => setShowEditMeter(false);
    const handleShowEditMeter = (meter: Meter) => {
        handleCloseMeterInfo();
        loadCurrentMeter(meter);
        setShowEditMeter(true)
    };

    const [showDeleteMeter, setShowDeleteMeter] = useState(false);
    const handleCloseDeleteMeter = () => setShowDeleteMeter(false);
    const handleShowDeleteMeter = (meter: Meter) => {
        handleCloseMeterInfo();
        loadCurrentMeter(meter);
        setShowDeleteMeter(true);
    };

    return (
        <>
            {
                isLoading
                    ?
                    <LoadingMeter />
                    :
                    <>
                        <table className="table text-center table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Serial</th>
                                    <th scope="col">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <MeterRowItem
                                    slice={slice}
                                    handleShowMeterInfo={handleShowMeterInfo}
                                    handleShowEditMeter={handleShowEditMeter}
                                    handleShowDeleteMeter={handleShowDeleteMeter}
                                />
                            </tbody>
                        </table>
                        <TableFooter range={range} slice={slice} setPage={setPage} page={page} setRowsPerPage={setRowsPerPage} />
                        {
                            currentMeter
                            &&
                            <>
                                <MeterInfoModal
                                    show={showMeterInfo}
                                    handleClose={handleCloseMeterInfo}
                                    handleShowEditMeter={handleShowEditMeter}
                                    handleShowDeleteMeter={handleShowDeleteMeter}
                                />
                                {
                                    showEditMeter
                                    &&
                                    <EditMeterModal
                                        show={showEditMeter}
                                        handleClose={handleCloseEditMeter}
                                    />
                                }
                                <DeleteMeterModal
                                    show={showDeleteMeter}
                                    handleClose={handleCloseDeleteMeter}
                                />
                            </>
                        }
                    </>
            }
        </>
    )
}
