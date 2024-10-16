const fs = require('fs');
const fetch = require('node-fetch');
const cron = require('node-cron');

// URL de ton API
const baseUrl = import.meta.env.VITE_API_URL;

async function fetchData(endpoint) {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return [];
    }
}

async function updateDataFile() {
    console.log('Updating data.js file...');

    // Fetch data from the API, fallback to an empty array if there is an error
    const pizzaData = await fetchData('pizza');
    const panuozziData = await fetchData('panuozzi');
    const dessertData = await fetchData('dessert');
    const drinkData = await fetchData('drink');

    // Prepare the content to be written into the data.js file
    const fileContent = `export const pizzaData = ${JSON.stringify(pizzaData, null, 2)};\n
                        export const panuozziData = ${JSON.stringify(panuozziData, null, 2)};\n
                        export const dessertData = ${JSON.stringify(dessertData, null, 2)};\n
                        export const drinkData = ${JSON.stringify(drinkData, null, 2)};\n`;

    // Write the content to the data.js file
    fs.writeFile('./src/assets/data/data.js', fileContent, (err) => {
        if (err) {
            console.error('Error writing to data.js file:', err);
        } else {
            console.log('data.js file successfully updated!');
        }
    });
}

// Schedule the task to run every 24 hours (at midnight)
cron.schedule('0 0 * * *', () => {
    updateDataFile();
    console.log('Scheduled task running: Data file update.');
});

// Run the update function immediately when the script starts
updateDataFile();
