import { toastError } from "@/utils/toast";
import { Button, Select } from "../form";
export const Pagination = ({
  totalPages, page, setPageDetails, limit
}) => {
  const editPage = (value) => {
    setPageDetails({ pageNumber: value })
  }
  totalPages = Number(totalPages);
  page = Number(page);
  return (
    <div className="btn-group flex justify-end btn-sm mb-4 w-9/12 mt-10">
      <Select
        classNames={`mr-4`}
        optionNames={["5", "10", "15", "20"]}
        optionValues={[5, 10, 15, 20]}
        defaultValue={limit}
        onChange={(event) => {
          const value = event.target.value;
          setPageDetails({ limit: value, pageNumber: 1 })
        }}
      />
      <div className="mt-2 mr-3"> Showing Page {page} of {totalPages}</div>
      <Button
        classNames="btn-sm btn-outline btn-primary"
        disabled={page-1 <= 0}
        onClick={() => {
          if (page - 1 > 0) editPage(page - 1)
        }}
      >
        «
      </Button>
      {
        totalPages <= 5 &&
        <>
          {[1, 2, 3, 4, 5].map((value, index) => {
            return (<>
              {totalPages >= value &&
                <Button
                  key={index}
                  classNames={`btn-sm btn-outline btn-primary ${value === page ? 'btn-active' : ''}`}
                  onClick={() => editPage(value)}
                >{value}
                </Button>}

            </>)
          })}
        </>
      }
      {
        totalPages > 5 &&
        <>
          {[1, 2, 3, totalPages - 2, totalPages - 1, totalPages].map((value, index) => {
            return (<>
              {(
                // 1,2,3
                totalPages >= value ||
                // page-1, page, page+1
                (value > 3)) &&
                <Button
                  key={index}
                  classNames={`btn-sm btn-outline btn-primary ${value === page ? 'btn-active' : ''}`}
                  onClick={() => editPage(value)}
                >{value}
                </Button>}

            </>)
          })}
        </>
      }
      <Button
        classNames="btn-sm btn-outline btn-primary"
        disabled={page+1 > totalPages}
        onClick={() => {
          if (page + 1 <= totalPages) editPage(page + 1)
        }}
      >
        »
      </Button>
      <div></div>
    </div >)
}
