import { useRef, useState, useEffect, Fragment } from "react";
import { useForm, } from "react-hook-form";
import { Button, Input, Label, TextArea } from "../sharing/form";
import { toastError, toastSuccess } from "@/utils/toast";
import { useDataContext } from "@/context/data/provider";
import { setModal } from "@/utils/modal";
export const IssueForm = ({
}) => {
    const [loading, setLoading] = useState(false);
    const { currentIssue, setCurrentIssue, addList, editList } = useDataContext()
    const isAddMode = currentIssue == null;
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onChange" });
    const onSubmit = (data, event) => {
        setLoading(true);
        event.preventDefault();
        data.description = document.getElementById("description").value
        setTimeout(() => {
            try {
                if (isAddMode == true) {
                    delete data.id;
                    addList(data);
                }
                else {
                    editList(data.id, data)
                }
                toastSuccess("Successfully added your message!")
            }
            catch (error) {
                toastError(error)
            }
            finally {
                setLoading(false);
                setModal(false)
            }
        }, 2000);
    }
    const formRef = useRef(null)
    useEffect(() => {
        reset({
            id: currentIssue?.id || "", type: currentIssue?.type || "", description: currentIssue?.description || ""
        })
        document.getElementById("description").value = currentIssue?.description || ""
    }, [currentIssue?.id, currentIssue?.type, currentIssue?.description])
    return (
        <>
            <h1 className='pb-5 text-xl font-bold'>
                {isAddMode ? <> Add Issues... </> : <> Edit Issues... </>}
            </h1>

            <form
                formRef={formRef}
                className="font-medium"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mx-auto">
                    {
                        !isAddMode &&
                        <>
                            <Label text="Issue id" />
                            <Input
                                type="text"
                                {...register("id")}
                                defaultValue={currentIssue?.id}
                                disabled={true}
                            />
                        </>
                    }
                    <Label text="Issue Type" />
                    <Input
                        type="text"
                        {...register("type",
                            {
                                required: "This is required",
                                minLength: {
                                    value: 3,
                                    message: "Type must be 3 letters or more"
                                }
                            }
                        )}
                        defaultValue={currentIssue?.type}
                    />
                    {errors.type && <p>{errors.type?.message}</p>}
                    <Label text="Issue Description" />
                    <TextArea
                        type="text"
                        id="description"
                        {...register("description",
                            {
                                required: "This is required",
                                minLength: {
                                    value: 10,
                                    message: "Description must be 10 letters or more"
                                },
                            }
                        )}
                        defaultValue={currentIssue?.description}
                    />
                    {errors.description && <p>{errors.description?.message}</p>}
                    <div className="flex justify-around mt-4">
                        {
                            isAddMode ?
                                <>
                                    <Button classNames={`btn btn-primary mt-4 ${loading ? "loading" : ""}`} type="submit" >
                                        Add Issue
                                    </Button>
                                </>
                                :
                                <>
                                    <Button classNames={`btn btn-primary mt-4 ${loading ? "loading" : ""}`} type="submit">
                                        Edit Issue
                                    </Button>
                                    <Button classNames={`btn btn-primary mt-4 ml-5`}
                                        onClick={() => { reset(); setCurrentIssue(null); }}>
                                        Add mode
                                    </Button>
                                </>
                        }
                    </div>
                </div>
            </form>
        </>
    )
}