import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    const params = useParams();
    const [details, setDetails] = useState([]);
    const [active, setActive] = useState('instructions');

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
        <div className="grid md:grid-cols-12 space-y-4 md:space-y-0 md:space-x-5">
            <div className="md:col-span-5 space-y-3">
                <h1 className="text-lg font-semibold">{details.title}</h1>
                <div className="relative">
                    <div className="w-[100%] h-[100%] bottom-0 absolute z-[3] bg-gradient-to-b from-dark/20 to-dark/40" />
                    <img src={details.image} alt='/' width={1000} height={1000} />
                </div>
            </div>
            <div className="md:col-span-7">
                <div className="space-x-3">
                    <button 
                        onClick={() => setActive('instructions')}
                        className="border bg-dark rounded-lg h-9 w-28 text-milk hover:bg-white hover:text-dark hover:font-semibold"
                    >
                        Information
                    </button>
                    <button 
                        onClick={() => setActive('ingredients')}
                        className="border-2 bg-milk text-dark font-semibold rounded-lg h-9 w-28 hover:text-milk hover:bg-dark"
                    >
                        Ingredients
                    </button>
                </div>
                {active === 'instructions' && (
                    <div>
                    <h2 dangerouslySetInnerHTML={{__html: details.summary}} className="text-lg"></h2>
                    <h2 dangerouslySetInnerHTML={{__html: details.instructions}} className="text-lg"></h2>
                    </div>)
                }
                {active === 'ingredients' && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>)       
                }
            </div>          
        </div>
        
    </section>
  )
}

export default Details;