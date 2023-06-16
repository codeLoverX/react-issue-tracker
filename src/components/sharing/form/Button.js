export const Button = ({
    type,
    classNames,
    children,
    onClick,
    disabled
}) => {
    disabled ??= false
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`btn btn-sm btn-primary ${classNames != undefined ? classNames : ""}`}
            {...(type !== null ? { type } : {})}
        >
            {children}
        </button>
    )
}