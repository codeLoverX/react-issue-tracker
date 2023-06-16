export const Select = ({
    classNames,
    optionValues,
    optionNames,
    ...props
}) => {
    return (
        <select
            className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg`
                + `focus:ring-blue-600 focus:border-blue-600 block `
                + `${classNames !== undefined ? classNames : "px-4"}`}
            {...props}
        >
            <option disabled value="no-value"></option>
            {optionValues.map((value, index) =>
                (<>
                    <option value={value}> {optionNames[index]} </option>
                </>))}
        </select>
    )
}