import { Table } from "../sharing/table/Table";
import { Loading } from "../layout/Loading";
import { useDataContext } from "@/context/data/provider";
import { useEffect, useState } from "react";
import { useFeedbackContext } from "@/context/feedback/provider";
import { Modal } from "../sharing/form";

export const IssueList = ({
}) => {
    const { issuePage, setCurrentIssue, deleteList } = useDataContext()
    const { loading } = useFeedbackContext()
    const [loadingIndex, setLoadingIndex] = useState(-1);
    console.log({ issuePage, loading })
    return (
        <div>
            {loading && (<div classNames="min-h-screen mx-auto" ><Loading classNames="text-green-400 mx-auto w-[50px] h-[256px]" /></div>)}
            {
                !loading &&
                <Table
                    tableHeading={["ID", "Name", "Description", ""]}
                    render={
                        () => (
                            <>
                                {issuePage?.docs.map((value, index) => (
                                    <tr key={value?.id}>
                                        <th className="w-1/5">{value?.id}</th>
                                        <td className="w-1/5">{value?.type}</td>
                                        <td className="w-2/5">{value?.description}</td>
                                        <td className="w-1/12 -z-50">
                                            <div className={`relative`}>
                                                <>
                                                    <label
                                                        htmlFor="form-modal"
                                                        onClick={() => {
                                                            setCurrentIssue(value?.id)
                                                        }}
                                                        className=""
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                            className="w-6 h-6 inline text-green-500 cursor-pointer hover:text-blue-500"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                        </svg>
                                                    </label>
                                                    <span className="relative">
                                                        <span className="">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                                className={`ml-3 w-6 h-6 inline cursor-pointer -z-50 text-red-500 hover:text-blue-500`}
                                                                onClick={() => {
                                                                    setLoadingIndex(index)

                                                                }}
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </span>
                                                        {
                                                            loadingIndex === index
                                                            &&
                                                            <div className={`absolute top-6 opacity-100 bg-white right-0 z-50`}>
                                                                <div className="card w-96 bg-base-100 opacity-100 z-50">
                                                                    <div className="card-body z-50">
                                                                        <h2 className="card-title">
                                                                            Delete Issue!
                                                                            <div className="badge badge-secondary">WARN</div>
                                                                        </h2>
                                                                        <p>ARE YOU SURE YOU WANT TO DELETE THIS ISSUE?</p>
                                                                        <div className="card-actions justify-end z-50 cursor-pointer">
                                                                            <button
                                                                                className="btn btn-sm z-50 btn-primary"
                                                                                onClick={() => {
                                                                                    setTimeout(() => {
                                                                                        deleteList(value?.id);
                                                                                        setLoadingIndex(-1);
                                                                                    }, 2000)
                                                                                }}
                                                                            >Yes</button>
                                                                            <button
                                                                                className="btn btn-sm z-50 btn-primary cursor-pointer"
                                                                                onClick={() => {
                                                                                    setLoadingIndex(-1);
                                                                                }
                                                                                }
                                                                            >No</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    </span>
                                                </>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        )
                    }
                />
            }
        </div>
    );
};
