import {Link} from 'react-router-dom'

function Header(props) {
    return(
      <header class="text-zinc-200">
      <nav class="sticky top-0 flex bg-gradient-to-r from-lime-500 to-lime-700">
        <div class=" flex items-center p-3 gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-9 h-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>

          <div class="font-bold text-4xl">
            <Link to='/'>Reci<span class="text-sky-800">pes</span></Link>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-end">
          <div class="menu-items"><Link to='add'><span>Add</span></Link>
          </div>
          <div class="menu-items"><Link to='search'><span>Search</span></Link>
          </div>
          <div class="menu-items"><span>About</span>
          </div>
          <div class="menu-items"><span>Support</span>
          </div>
        </div>
      </nav>
    </header>
    )
}

export default Header