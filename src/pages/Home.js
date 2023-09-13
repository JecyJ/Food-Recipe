import Popular from '../components/Popular';
import Veggie from '../components/Veggie';
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition:{duration: 1.3}}}
      exit={{opacity: 0}}
    >
        <Popular />
        <Veggie />
    </motion.section>
  )
}

export default Home;