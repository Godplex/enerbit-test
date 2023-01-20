import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { Meter } from "../../interfaces";
import { ChevronDoubleLeft, ChevronLeft, ChevronDoubleRight, ChevronRight } from 'react-bootstrap-icons';

interface Props {
    range: Number[],
    setPage: Dispatch<SetStateAction<number>>,
    page: number,
    slice: Meter[],
    setRowsPerPage: Dispatch<SetStateAction<number>>,
}

export const TableFooter: FC<Props> = ({ range, setPage, page, slice, setRowsPerPage }) => {

    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);

    return (
        <div className="d-flex justify-content-between gap-2">
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setPage(1)}
                    disabled={page === 1}
                >
                    <ChevronDoubleLeft />
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => page > 1 && setPage(page - 1)}
                    disabled={page === 1}
                >
                    <ChevronLeft />
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => page <= range.length && setPage(page + 1)}
                    disabled={page === range.length}
                >
                    <ChevronRight />
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => page <= range.length && setPage(range.length)}
                    disabled={page === range.length}
                >
                    <ChevronDoubleRight />
                </button>
            </div>
            <div className="col-lg-1 col-md-2 col-5">
                <select className="form-select" aria-label="Default select example" onChange={(e) => setRowsPerPage(Number(e.target.value))}>
                    {
                        [5, 10, 25, 50, 100].map((size, index) => (
                            <option value={`${size}`} key={index}>Show {size}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
