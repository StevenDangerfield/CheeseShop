import config from "../config";

async function deleteCheese(cheeseId: number) {
    try {
        const response = await fetch(`${config.baseApiUrl}/Cheese/${cheeseId}`, {
          method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const result = await response.json();
        console.log('Success:', result);
    } 
    catch (error) {
        console.error('Error:', error);
    }
}

export default deleteCheese;