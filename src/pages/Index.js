import Contacts from '../components/Contacts'
import { useLoaderData } from 'react-router-dom'

const Index = (props) => {
  const contacts = useLoaderData()

  return (
    <div className='main'>
      {contacts.map((contact) => (
        <Contacts post={contact} key={contact.id} />
      ))}
    
    </div>
  )
}

export default Index
