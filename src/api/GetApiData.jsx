export const GetApiData = async()=>{

    try {
       const response = await fetch(
           `http://www.omdbapi.com/?s=naruto&apikey=${import.meta.env.VITE_API_KEY}`
        )
        

        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }

}