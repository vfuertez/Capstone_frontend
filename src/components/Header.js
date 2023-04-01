import { Link } from 'react-router-dom';

function Header(props) {
    return(
      <div class="text-stone-900 body-font w-full bg-gradient-to-r from-amber-300 to-amber-700">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
  <Link to='/'><span class="ml-1 text-xl font-extrabold text-red-900">Recipes</span></Link>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l flex flex-wrap items-center text-base justify-center">
      <Link to='add' class="mr-5 hover:text-red-700">Add Recipe</Link>
      <Link to='sites' class="mr-5 hover:text-red-700">Sites</Link>
      <Link class="mr-5 hover:text-red-700">About</Link>
      <Link class="mr-5 hover:text-red-700">Support</Link>
    </nav>
  </div>
</div>
    )
}

export default Header