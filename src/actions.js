import url from './url'
import { redirect } from 'react-router-dom'

export async function CreateAction({ request }) {
  const formData = await request.formData()

  const newRecipe = {
    name: formData.get('name'),
    image: formData.get('image'),
    ingredients: formData.get('ingredients'),
    recipe: formData.get('recipe'),
  }

  await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRecipe),
  })

  return redirect('/')
}

export async function UpdateAction({ request, params }) {
  const formData = await request.formData()

  const updateRecipe = {
    name: formData.get('name'),
    image: formData.get('image'),
    ingredients: formData.get('ingredients'),
    recipe: formData.get('recipe'),
  }

  await fetch(url + params.id + '/', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateRecipe),
  })

  return redirect('/')
}

export async function DeleteAction({ params }) {
  const id = params.id

  await fetch(url + id + '/', {
    method: 'delete',
  })

  return redirect('/')
}
