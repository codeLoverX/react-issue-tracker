export const paginateHelper = (pageNumber, limit, list) => {
  // pageNumber, limit api properties
  const startIndex = (pageNumber - 1) * limit;
  const endIndex = (pageNumber * limit);
  const length = list.length;
  const docs = list.slice(startIndex, endIndex);
  const totalPages = Math.ceil(length / limit);
  const hasPrevPage = pageNumber - 1 >= 0;
  const hasNextPage = pageNumber + 1 < totalPages;
  return {
    totalPages, hasPrevPage, hasNextPage, docs
  }
}

export const paginateLastPageHelper = (limit, list) => {
  // pageNumber, limit api properties
  const length = list.length;
  const totalPages = Math.ceil(length / limit);
  const startIndex = (totalPages - 1) * limit;
  const endIndex = (totalPages * limit) - 1;
  const docs = list.slice(startIndex, endIndex);
  const hasPrevPage = totalPages - 1 ;
  const hasNextPage = false;
  return {
    totalPages, hasPrevPage, hasNextPage, docs
  }
}
