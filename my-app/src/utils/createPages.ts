export function createPages(pages: Array<number>, pagesCount: number, currentPage: number): void {
  if (pagesCount > 7) {
    if (currentPage > 5) {
      for (let i = currentPage - 3; i <= currentPage + 3; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 7; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
}
