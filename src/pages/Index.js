import Recipe from '../components/Recipe'
import { useLoaderData } from 'react-router-dom'

const Index = (props) => {
  const contacts = useLoaderData()

  return (
    <div className='main'>
      {contacts.map((contact) => (
        <Recipe post={contact} key={contact.id} />
      ))}
    
    </div>
  )
}

export default Index
