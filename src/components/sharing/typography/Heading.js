export const Heading = ({
    classNames,
    children
})=>{
    return (
        <h1 
            className={`pb-5 text-2xl font-bold ${classNames!==undefined ? classNames : ""}`}
        >
            {children}
        </h1>
    )
}