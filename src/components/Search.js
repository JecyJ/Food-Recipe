import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return (
    <section>
        <div className="flex flex-col items-center justify-center">
            <div>
              <AiOutlineSearch size={20} />
              <input className='bg-dark/60' />
            </div>
        </div>
    </section>
  )
}

export default Search;