import { Link, useLoaderData, Form } from "react-router-dom";

const Show = (props) => {
    const recipe = useLoaderData()
    return (
        <>
<section class="text-gray-600 body-font">
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
          <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn. Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          
        </div>
      </div>
    </div>
  </div>
</section>
        <Link to="/">
        <button>Go Back</button>
      </Link>
      <div >
        <Form action={`/update/${recipe.id}`} method="post">
        <div class="mb-3 pt-0">
        <label for="name"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800" >NAME</label>
    <input type="text" name="name" id="name" placeholder="Placeholder" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6  bg-slate-300" defaultValue={recipe.name}/>
  </div>

  <div class="mb-3 pt-0">
        <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800" >IMAGE</label>
    <input type="text" name="image" id="name" placeholder="Placeholder" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6  bg-slate-300" defaultValue={recipe.image}/>
  </div>

<div class="mb-3">
  <label for="ingredients" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800" >INGREDIENTS</label>
  <textarea type="text" name="ingredients" id="ingredients" placeholder="Ingredients" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6 resize-y h-44 sm:h-72 bg-slate-300" defaultValue={recipe.ingredients}/>
</div>

<div class="mb-3">
  <label for="recipe" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800" >RECIPE</label>
  <textarea type="text" name="recipe" id="recipe" placeholder="Ingredients" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6 resize-y h-44 sm:h-72 bg-slate-300" defaultValue={recipe.recipe}/>
</div>
<button class="bg-blue-400">update</button>
        </Form>
        <div className="delete_container">
          <Form action={`/delete/${recipe.id}`} method="post">
            <button >Delete</button>
          </Form>
        </div>
      </div>
        </>
    )
  };
  
  export default Show;