import {Form} from 'react-router-dom'

function AddPage(props) {
    return(
       <div class="m-5">
        <Form action="/create" method="post">
        <div class="mb-3 pt-0">
        <label for="name"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800" >NAME</label>
    <input type="text" name="name" id="name" placeholder="Placeholder" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6  bg-slate-300"/>
  </div>

  <div class="mb-3 pt-0">
        <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800" >IMAGE</label>
    <input type="text" name="image" id="name" placeholder="Placeholder" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6  bg-slate-300"/>
  </div>

<div class="mb-3">
  <label for="ingredients" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800" >INGREDIENTS</label>
  <textarea type="text" name="ingredients" id="ingredients" placeholder="Ingredients" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6 resize-y h-44 sm:h-72 bg-slate-300" />
</div>

<div class="mb-3">
  <label for="recipe" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800" >RECIPE</label>
  <textarea type="text" name="recipe" id="recipe" placeholder="Ingredients" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6 resize-y h-44 sm:h-72 bg-slate-300" />
</div>
<button class="bg-blue-400">Add</button>
        </Form>
       </div>
    )
}

export default AddPage