
export const PaginationOptions = (
    gotoPage: any,
    canPreviousPage: any,
    previousPage: () => void,
    nextPage: any,
    canNextPage: any,
    pageCount: any,
    pageSize: any,
    setPageSize: any
) => {
    return (
        <div className="d-flex justify-content-between">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    className='btn btn-primary'
                    onClick={() => gotoPage(0)} disabled={!canPreviousPage}
                >
                    {'<<'}
                </button>
                <button
                    className='btn btn-primary'
                    onClick={() => previousPage() as any}
                    disabled={!canPreviousPage}
                >
                    {'<'}
                </button>
                <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className='btn btn-primary'
                >
                    {'>'}
                </button>
                <button
                    className='btn btn-primary'
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    {'>>'}
                </button>
            </div>
            <div>
                <select
                    className='form-control'
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
