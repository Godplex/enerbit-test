import { FC } from "react"
import { Meter } from "../../interfaces"

interface Props {
    slice: Meter[],
    handleShowMeterInfo: (meter: Meter) => void
    handleShowEditMeter: (meter: Meter) => void
    handleShowDeleteMeter: (meter: Meter) => void
}

export const MeterRowItem: FC<Props> = ({ slice, handleShowMeterInfo, handleShowEditMeter, handleShowDeleteMeter }) => {
    return (
        <>
            {
                slice.length > 0
                    ?
                    <>
                        {
                            slice.map((meter, index) => (
                                <tr key={index}>
                                    <th
                                        className="w-50"
                                        scope="row"
                                        role="button"
                                        onClick={() => handleShowMeterInfo(meter)}
                                    >
                                        {meter.serial}
                                    </th>
                                    <td className="w-50">
                                        <div className="d-flex gap-2 justify-content-center">
                                            <div>
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() => handleShowEditMeter(meter)}
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleShowDeleteMeter(meter)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </>
                    :
                    <tr>
                        <td colSpan={2}>No meters</td>
                    </tr>
            }
        </>
    )
}
