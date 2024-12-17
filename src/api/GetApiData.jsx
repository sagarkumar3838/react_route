export const GetApiData = async()=>{

    try {
       const response = await fetch(
           "http://www.omdbapi.com/?s=iron man&apikey=498be94"
        )
        

        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }

}