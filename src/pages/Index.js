import Recipe from '../components/Recipe'
import { useLoaderData } from 'react-router-dom'

const Index = (props) => {
  const contacts = useLoaderData()

  return (
    <div className='main' /*class="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 w-auto h-auto gap-5"*/>
      {contacts.map((contact) => (
        <Recipe post={contact} key={contact.id} />
      ))}
    
    </div>
  )
}

export default Index
