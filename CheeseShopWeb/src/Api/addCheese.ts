import config from "../config";
import Cheese from "../Types/Cheese";

async function addCheese(cheese: Cheese) {
    try {
        const response = await fetch(`${config.baseApiUrl}/Cheese`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cheese),
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const result = await response.json();
        console.log('Success:', result);

    } catch (error) {
        console.error('Error:', error);
    }
}

export default addCheese;