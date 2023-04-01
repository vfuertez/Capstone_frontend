import {Form} from 'react-router-dom'

function AddPage(props) {
    return(
       <div class="m-5">
        <Form action="/create" method="post">
        <div class="mb-3 pt-0 ">
        <label for="name"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-500" >NAME</label>
    <input type="text" name="name" id="name" placeholder="Name" class="px-3 py-3 text-slate-800 relative  rounded text-md border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6  bg-slate-200 required font-semibold " autoComplete='off'/>
  </div>


  <div class="mb-3 pt-0">
        <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-500" >IMAGE</label>
    <input type="text" name="image" id="name" placeholder="Image URL" class="px-3 py-3 placeholder-slate-400 text-slate-800 relative  rounded text-md border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6  bg-slate-200 font-semibold"/>
  </div>

<div class="mb-3">
  <label for="ingredients" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-500" >INGREDIENTS</label>
  <textarea type="text" name="ingredients" id="ingredients" placeholder="Ingredients" class="px-3 py-3 placeholder-slate-400 text-slate-800 relative  rounded text-md border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6 resize-y h-42 sm:h-36 bg-slate-200 font-semibold" />
</div>

<div class="mb-3">
  <label for="recipe" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-500" >RECIPE</label>
  <textarea type="text" name="recipe" id="recipe" placeholder="Recipe" class="px-3 py-3 placeholder-slate-400 text-slate-800 relative  rounded text-md border-0 shadow outline-none focus:outline-none focus:ring w-11/12 sm:w-3/6 resize-y h-44 sm:h-60 bg-slate-200 font-semibold" />
</div>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-8">
Add
</button>

        </Form>
       </div>
    )
}

export default AddPage