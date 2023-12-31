import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'



const Veggie = () => {


  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    async function fetchRandomRecipe() {

      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=30&tags=vegetarian`);
        const data = await response.json();
        // localStorage.setItem('veggie', JSON.stringify(data.recipes));
        setVeggie(data.recipes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }


      // const check = localStorage.getItem('veggie');
      // if(check) {
      //   setVeggie(JSON.parse(check));
      // } else {
        
      // }      
    }      

    fetchRandomRecipe();
  }, []);

    
  return (
    <>
      <div className="overflow-hidden space-y-3 mt-10 px-3">
        <h3 className="text-center text-2xl">Vegetarian Picks</h3>
        <Splide options={{
          perPage:3,
          arrows:false,
          pagination: false,
          gap:"2rem",
          drag:"free"
        }}>
          {veggie.map((recipes) => (
            <SplideSlide key={recipes.id}>
            <Link to={'/details/' + recipes.id}>
              <div className="relative">
                <div className="w-[100%] h-[100%] bottom-0 rounded-3xl absolute z-[3] bg-gradient-to-b from-dark/20 to-dark/40" />
                <img src={recipes.image} alt="/" width={400} height={250} priority="true" className="w-auto h-auto text-center border rounded-3xl" />              
              </div>
              <p className="absolute md:bottom-6 translate-x-[100] text-xs z-[3] text-white sm:text-sm text-center">{recipes.title}</p>
            </Link>              
            </SplideSlide>
          ))}
        </Splide>
      </div>
      
    </>
  )
}

export default Veggie;