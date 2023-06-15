import { Fragment } from "react"

export const Table = ({
    tableHeading,
    classNames,
    render
})=>{
    return (
        <table className={`table table-zebra w-full table-compact ${classNames!==undefined ? classNames : ""}`}>
            <thead>
            <tr>
                <th></th>
                {tableHeading.map((value, index) => (
                    <Fragment key={value?.id || index}>
                     <th>{value}</th>
                     </Fragment>
            ))}

                    </tr>
            </thead>
            <tbody>
            {
                render()
            }
            </tbody>
        </table>
    )
}