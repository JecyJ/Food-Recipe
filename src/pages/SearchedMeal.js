import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SearchedMeal = () => {
    const params = useParams()
    const [searchedCuisine, setSearchedCuisine] = useState([]);

  useEffect(() => {
    async function fetchSearchedCuisine() {
      try{
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${params.search}`);
        const data = await response.json();
        setSearchedCuisine(data.results);
      }catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchSearchedCuisine();
        
  }, [params.search]);

  return (
    <section className="w-full h-full max-w-[380px] sm:max-w-[650px] md:max-w-[1100px] m-auto space-y-3 mt-4">
      <h1 className="font-semibold text-xl text-center">{params.name}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 justify-center">
        {searchedCuisine.map((results) => (
          <div key={results.id}>
            <div className="relative">
              <div className="w-[100%] h-[100%] bottom-0 rounded-3xl absolute z-[3] bg-gradient-to-b from-dark/20 to-dark/40" />          
              <img src={results.image} alt="/" width={400} height={250} priority="true" className="w-auto h-auto text-center border rounded-3xl" />
            </div>
            <h2 className="text-sm font-semibold">{results.title}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SearchedMeal;