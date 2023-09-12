import Cusine from "./Cusine";
import Home from "./Home";
import  {Route, Routes} from 'react-router-dom'
import SearchedMeal from "./SearchedMeal";
import Details from "./Details";

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cusine/:name" element={<Cusine />} />
        <Route path="/searched/:search" element={<SearchedMeal />} />
        <Route path="/details/:detail" element={<Details />} />
    </Routes>
  )
}

export default Pages;