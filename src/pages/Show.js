import { Link, useLoaderData, Form } from "react-router-dom";

const Show = (props) => {
    const recipe = useLoaderData()
    return (
        <>
<section class="text-gray-600 body-font " >
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src={recipe.image}/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{recipe.name}</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">{recipe.ingredients}</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">{recipe.recipe}</p>
          <Link to="/" class="text-indigo-500 inline-flex items-center">Home
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
      <Link to={`update`}> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-8 w-24 ">
  Edit 
</button></Link>

<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-800 rounded ml-4 w-24">
<Form action={`/delete/${recipe.id}`} method="post">
           <button> Delete</button>
          </Form>
</button>
    </div>
  </div>
</section>
       
      
      
        </>
    )
  };
  
  export default Show;