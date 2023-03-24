import Contacts from '../components/Contacts'
import { useLoaderData } from 'react-router-dom'

const Index = (props) => {
  const contacts = useLoaderData()

  return contacts.map((contact) => <Contacts post={contact} key={contact.id} />)
}

export default Index
