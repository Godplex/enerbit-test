
export const LoadingMeter = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p>Loading...</p>
        </div>
    )
}
