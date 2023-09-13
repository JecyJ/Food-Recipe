import Cusine from "./Cusine";
import Home from "./Home";
import  {Route, Routes, useLocation} from 'react-router-dom'
import SearchedMeal from "./SearchedMeal";
import Details from "./Details";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cusine/:name" element={<Cusine />} />
        <Route path="/searched/:search" element={<SearchedMeal />} />
        <Route path="/details/:detail" element={<Details />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages;