import Contacts from '../components/Contacts'
import { useLoaderData, Form } from 'react-router-dom'

const Index = (props) => {
  const contacts = useLoaderData()

  return (
    <>
      <div>
        <Form action="/create" method="post">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              autocomplete="off"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              autocomplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autocomplete="off"
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Phone"
              autocomplete="off"
            />
            <input type="url" name="url" placeholder="URL" autocomplete="off" />
            <br></br>
            <button>Add</button>
          </div>
        </Form>
      </div>

      {contacts.map((contact) => (
        <Contacts post={contact} key={contact.id} />
      ))}
    </>
  )
}

export default Index
