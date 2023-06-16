export const Button = ({
    type,
    classNames,
    children,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`btn btn-sm btn-primary ${classNames != undefined ? classNames : ""}`}
            {...(type !== null ? { type } : {})}
        >
            {children}
        </button>
    )
}