export const generatePageButtons = (totalPages: number): number[] => {
  const pages: number[] = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i);
  }
  return pages;
};

export const displayFivePages = (pagesList: number[], currentPage: number) => {
  if (currentPage <= 3 && pagesList.length > 5) {
    return pagesList.slice(0, 5);
  }
  if (currentPage + 2 >= pagesList.length) {
    const index = pagesList.length - currentPage;
    return pagesList.slice(currentPage - 5 + index, currentPage + index);
  }
  if (pagesList.length > 5 && currentPage >= 4) {
    return pagesList.slice(currentPage - 2, currentPage + 3);
  }
  return pagesList;
};
