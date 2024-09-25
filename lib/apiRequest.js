// import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export async function makePostRequest(setLoading, endpoint, data, resourceName,reset){
    try {
        setLoading(true);
        const baseUrl = "http://localhost:3000"
        
        const response = await fetch(`${baseUrl}/${endpoint}`, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
        })
  
        if (response.ok){

          setLoading(false);
          toast.success(`New ${resourceName} created successfully👍`)
          reset();
        }
        else{
          setLoading(false);
          if(response.status===409){
            
          toast.error("The Giving Warehouse Stock is NOT enough 🙆‍♀️")
          }else{
            toast.error("Something went wrong🙏")
          }
          reset();
        }
        
        
      } catch (error) {
        setLoading(false);
        console.log(error);
        
      }
}

export async function makePutRequest(setLoading, endpoint, data, resourceName, redirect, reset){
  try {
    
      setLoading(true);
      const baseUrl = "http://localhost:3000"
      
      const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      })

      if (response.ok){
        console.log(response)
        setLoading(false);
        toast.success(`${resourceName} Updated successfully👍`)
        redirect();
      }
      else{
        
        setLoading(false);
        toast.error("Something went wrong🙏")
        reset();
      }
      
      
    } catch (error) {
      setLoading(false);
      console.log(error);
      
    }
}