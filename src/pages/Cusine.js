import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Cusine = () => {
  const params = useParams()


    const [cuisine, setCuisine] = useState([]);

  useEffect(() => {
    async function fetchCuisine() {
      try{
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${params.name}`);
        const data = await response.json();
        setCuisine(data.results);
      }catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchCuisine();
    console.log(fetchCuisine())
        
  }, [params.name]);


  return (
    <motion.section 
      initial={{opacity: 0, y:0}}
      animate={{opacity: 1, y:20, transition:{duration: 1.3}}}
      exit={{opacity: 0}}
      className="w-full h-full max-w-[380px] sm:max-w-[650px] md:max-w-[1100px] m-auto space-y-3 mt-4"
    >
      <h1 className="font-semibold text-xl text-center">{params.name}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 justify-center">
        {cuisine.map((results) => (
          <div key={results.id}>
            <Link to={'/details/' + results.id}>
              <div className="relative">
                <div className="w-[100%] h-[100%] bottom-0 rounded-3xl absolute z-[3] bg-gradient-to-b from-dark/20 to-dark/40" />          
                <img src={results.image} alt="/" width={400} height={250} priority="true" className="w-auto h-auto text-center border rounded-3xl" />
              </div>
              <h2 className="text-sm font-semibold">{results.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Cusine;