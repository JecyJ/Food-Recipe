import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    const params = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        async function fetchDetails() {
            try {
                const apiKey = process.env.REACT_APP_API_KEY;
                const response = await fetch(`https://api.spoonacular.com/recipes/${params.detail}/information?apiKey=${apiKey}`);
                const data = await response.json();
                setDetails(data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }    
        }      
    
        fetchDetails();
      }, [params.detail]);


  return (
    <section className="w-full h-auto my-9 max-w-[380px] sm:max-w-[550px] md:max-w-[1100px] m-auto">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5">
            <div className="relative">
                <div className="w-[100%] h-[100%] bottom-0 rounded-3xl absolute z-[3] bg-gradient-to-b from-dark/20 to-dark/40" />
                <img src={details.image} alt='/' />
            </div>
            <div className="space-x-3">
                <button className="border bg-dark rounded-lg h-9 w-28 text-milk hover:bg-white hover:text-dark hover:font-semibold">Information</button>
                <button className="border-2 bg-milk text-dark font-semibold rounded-lg h-9 w-28 hover:text-milk hover:bg-dark">Ingredients</button>
            </div>
            <h1>{details.title}</h1>
        </div>
        
    </section>
  )
}

export default Details;