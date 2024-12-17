const Api_url = "https://fedskillstest.coalitiontechnologies.workers.dev/";
const userid = "coalition";
const password = "skills-test";

export async function fetchData() {
  try {
    const response = await fetch(Api_url, {
      method: "GET", 
      headers: {
        "Authorization": `Basic ${btoa(userid + ":" + password)}`, 
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {

      throw new Error(`Error result: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();


    return data; 
  } catch (error) {
  
    console.error(" error :", error.message);
    throw error; 
  }
}
