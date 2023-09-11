import recipe from '../images/recipe.png'



const Navbar = () => {
  return (
    <section>
      <div className="w-full h-auto py-5 max-w-[380px] sm:max-w-[650px] md:max-w-[1100px] m-auto">
        <a href='/' className="flex items-center">
            <img src={recipe} alt="/" width={40} height={40} priority="true" />
            <h1 className="text-xl text-dark/90 font-semibold">Scrumptious</h1>
        </a>
      </div>
    </section>
  )
}

export default Navbar;