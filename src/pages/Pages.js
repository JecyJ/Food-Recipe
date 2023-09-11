import Cusine from "../components/Cusine";
import Home from "./Home";
import  {Route, Routes} from 'react-router-dom'

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cusine/:name" element={<Cusine />} />
    </Routes>
  )
}

export default Pages;