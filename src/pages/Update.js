import { Link, useLoaderData, Form } from 'react-router-dom'

function Update(props) {
  const recipe = useLoaderData()
  return (
    <div class="mb-5">
      <Form action={`/update/${recipe.id}`} method="post">
        <div class="mb-3 pt-0">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800"
          >
            NAME
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Placeholder"
            class="px-3 py-3 placeholder-slate-300 text-slate-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6  bg-slate-200"
            defaultValue={recipe.name}
          />
        </div>

        <div class="mb-3 pt-0">
          <label
            for="image"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800"
          >
            IMAGE
          </label>
          <input
            type="text"
            name="image"
            id="name"
            placeholder="Placeholder"
            class="px-3 py-3 placeholder-slate-300 text-slate-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6  bg-slate-200"
            defaultValue={recipe.image}
          />
        </div>

        <div class="mb-3">
          <label
            for="ingredients"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800"
          >
            INGREDIENTS
          </label>
          <textarea
            type="text"
            name="ingredients"
            id="ingredients"
            placeholder="Ingredients"
            class="px-3 py-3 placeholder-slate-300 text-slate-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6 resize-y h-44 sm:h-32 bg-slate-200"
            defaultValue={recipe.ingredients}
          />
        </div>

        <div class="mb-3">
          <label
            for="recipe"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800"
          >
            RECIPE
          </label>
          <textarea
            type="text"
            name="recipe"
            id="recipe"
            placeholder="Ingredients"
            class="px-3 py-3 placeholder-slate-300 text-slate-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6 resize-y h-44 sm:h-60 bg-slate-200"
            defaultValue={recipe.recipe}
          />
        </div>
        <div class="p-2 ">
            <div class="w-1/2 "></div>
          <div>
            <Link to={`/recipe/${recipe.id}`}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-8 w-24">
            Cancel
          </button>
            </Link>
         

          <button class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mr-8 w-24">
            Save
          </button>
           </div>
        </div>
      </Form>
    </div>
  )
}

export default Update
