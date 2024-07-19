import config from "./config";

async function getData() {
    const response = await fetch(`${config.baseApiUrl}/CheeseList`);
    const data = await response.json();
  
    console.log(data);
  
    return data;
  }

  export default getData;