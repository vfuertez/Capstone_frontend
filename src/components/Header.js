import {Link} from 'react-router-dom'

function Header(props) {
    return(
      <header class="text-gray-600 body-font w-full bg-gradient-to-r from-lime-500 to-lime-700">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-9 h-9">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <Link to='/'><span class="ml-3 text-xl">Recipes</span></Link>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link to='add' class="mr-5 hover:text-gray-900">Add</Link>
      <Link class="mr-5 hover:text-gray-900">Search</Link>
      <Link class="mr-5 hover:text-gray-900">About</Link>
      <Link class="mr-5 hover:text-gray-900">Support</Link>
    </nav>
  </div>
</header>
    )
}

export default Header