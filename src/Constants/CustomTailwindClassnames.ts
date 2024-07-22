/**
 * just center everything within the applied block
 * @param {boolean} includesText - do you want the text too?
 */
export const centerEverythinWithin = (includesText: boolean): string => { return `flex items-center justify-center ${includesText ? "text-center" : ""}` }

export const contentSectionHeader: string = "font-semibold text-center md:text-left text-[1.8rem] mt-[6rem] mb-[4rem]";