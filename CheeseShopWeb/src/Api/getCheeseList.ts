import config from "../config";

async function getCheeseList() {
    try {
        const response = await fetch(`${config.baseApiUrl}/CheeseList`);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        console.log('Success: ', data);

        return data;
    }
    catch (error) {
        console.error('Error:', error);
    }
}
export default getCheeseList;