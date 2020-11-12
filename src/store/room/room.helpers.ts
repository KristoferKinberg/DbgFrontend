export const ITEMS_PER_PAGE: number = 50;

export const indexPages = (coworkers: string[], indexedCoworkers: any = {}, pageIndex: number = 0): any => {
    if (coworkers.length < ITEMS_PER_PAGE) return { ...indexedCoworkers, [pageIndex]: [...coworkers] };
    return indexPages(coworkers.splice(ITEMS_PER_PAGE), { ...indexedCoworkers, [pageIndex]: [...coworkers.slice(0, ITEMS_PER_PAGE)] }, pageIndex+1);
};
