
export const LoadingMeter = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p>Cargando...</p>
        </div>
    )
}
