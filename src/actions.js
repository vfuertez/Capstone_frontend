import url from './url'
import { redirect } from 'react-router-dom'

export async function CreateAction({ request }) {
  const formData = await request.formData()

  const newContact = {
    name: formData.get('name'),
    address: formData.get('address'),
    email: formData.get('email'),
    phone_number: formData.get('phone_number'),
    url: formData.get('url'),
  }

  await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newContact),
  })

  return redirect('/')
}

export async function UpdateAction({ request, params }) {
  const formData = await request.formData()

  const updateContact = {
    name: formData.get('name'),
    address: formData.get('address'),
    email: formData.get('email'),
    phone_number: formData.get('phone_number'),
    url: formData.get('url'),
  }

  await fetch(url + params.id + '/', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateContact),
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
