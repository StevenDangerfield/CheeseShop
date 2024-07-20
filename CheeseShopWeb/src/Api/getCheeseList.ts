import config from "../config";

async function getCheeseList() {
    try {
        const response = await fetch(`${config.baseApiUrl}/CheeseList`);
        const data = await response.json();

        console.log(data);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const result = await response.json();
        console.log('Success:', result);
        return data;
    } 
    catch (error) {
        console.error('Error:', error);
    }
}
export default getCheeseList;