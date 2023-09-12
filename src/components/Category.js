import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks, GiMeat} from 'react-icons/gi'
import {NavLink, useLocation} from 'react-router-dom';


const Category = () => {
  const location = useLocation();

  const isNavLinkActive = (to) => {
    return location.pathname === to;
  }

  return (
    <section className='max-w-[450px] m-auto mt-6'>
        <div className='flex justify-between'>
          <NavLink 
            className={`flex flex-col items-center border text-white text-center rounded-full cursor-pointer w-20 h-20 p-4 ${
            isNavLinkActive('/cusine/Italian') ? 'bg-gradient-to-r from-[#e94057] to-[#f27121]' : 'bg-dark'
            }`} 
            to={'/cusine/Italian'}
          >
              <FaPizzaSlice size={25} />
              <h4>Italian</h4>
          </NavLink>
          <NavLink 
          className={`flex flex-col items-center border text-white text-center rounded-full cursor-pointer w-20 h-20 p-4 ${
            isNavLinkActive('/cusine/German') ? 'bg-gradient-to-r from-[#e94057] to-[#f27121]' : 'bg-dark'
            }`} 
            to={'/cusine/German'}
          >
              <FaHamburger size={25} />
              <h4>German</h4>
          </NavLink>
          <NavLink 
            className={`flex flex-col items-center border text-white text-center rounded-full cursor-pointer w-20 h-20 p-4 ${
            isNavLinkActive('/cusine/Thai') ? 'bg-gradient-to-r from-[#e94057] to-[#f27121]' : 'bg-dark'
            }`}  
            to={'/cusine/Thai'}
          >
              <GiNoodles size={25} />
              <h4>Thai</h4>
          </NavLink>
          <NavLink 
            className={`flex flex-col items-center border text-white text-center rounded-full cursor-pointer w-20 h-20 p-4 ${
            isNavLinkActive('/cusine/Japanese') ? 'bg-gradient-to-r from-[#e94057] to-[#f27121]' : 'bg-dark'
            }`} 
            to={'/cusine/Japanese'}
          >
              <GiChopsticks size={25} />
              <h4>Japanese</h4>
          </NavLink>
          <NavLink 
            className={`flex flex-col items-center border text-white text-center rounded-full cursor-pointer w-20 h-20 p-4 ${
            isNavLinkActive('/cusine/American') ? 'bg-gradient-to-r from-[#e94057] to-[#f27121]' : 'bg-dark'
            }`}  
            to={'/cusine/American'}
          >
              <GiMeat size={25} />
              <h4>American</h4>
          </NavLink>
        </div>
    </section>
  )
}

export default Category;

 