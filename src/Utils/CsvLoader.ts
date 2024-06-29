import fs from "fs";

/**
 * Parses a CSV file into an array of objects.
 *
 * @param {string} csvFilePath - The path to the CSV file.
 * @returns {Promise<Array<object>>} - A promise that resolves to an array of objects representing the CSV data.
 */

export default async function parseCsv(csvFilePath: string) {
    try {
        const csvData = await fs.promises.readFile(csvFilePath, "utf-8");
        const rows = csvData.split("\n");

        // Extract the header row
        const headerRow = rows[0].split(",");

        // Parse the remaining rows into objects
        const parsedData = rows.slice(1).map((row) => {
            const columns = row.split(",");
            const rowObject: { [key: string]: string } = {};

            // Create an object with key-value pairs from the header and columns
            headerRow.forEach((header, index) => {
                rowObject[header.trim()] = columns[index].trim();
            });

            return rowObject;
        });

        return parsedData;
    } catch (error) {
        console.error(`Error parsing CSV file: ${csvFilePath}`, error);
    }
}

// parsed interface types are kept here
export interface CsvParsed_SampleMenu {
    chineseName: string;
    englishName: string;
    category: string;
    price: string;
    ingredients: string;
    description: string;
    event: string;
    location: string;
    servingSize: string;
    occasion: string;
    flavorProfile: string;
    sku: string;
    keywords: string;
    language: string;
    date: Date;
    city: string;
    restaurantType: string;
    currency: string;
    currencySymbol: string;
    status: string;
    sortOrder: number;
    quantity: number;
}
