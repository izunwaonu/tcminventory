  export async function getData(endpoint){
    try {
        const baseUrl = "http://localhost:3000"
        const response = await fetch(`${baseUrl}/api/${endpoint}`, {
          cache: "no-store"
        });
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }
  }