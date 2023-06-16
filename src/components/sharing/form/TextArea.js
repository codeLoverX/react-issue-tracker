import { forwardRef } from 'react';

export const TextArea = forwardRef(({
    classNames,
    optionValues,
    optionNames,
    defaultValue,
    ...props}, ref)=>{
    return (
        <textarea 
            ref={ref}
            defaultValue={defaultValue}
            rows={4}
            className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg`
                + `focus:ring-blue-600 focus:border-blue-600 block w-full p-2`
                + `${classNames !== undefined ? classNames : ""}`}
            {...props}          
        />
    )
})