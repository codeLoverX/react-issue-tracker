export const Modal = ({
    children,
    id
}) => {
    return (
        <>
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {children}
                </div>
            </div>
        </>
    )
}