import { Link, useLoaderData, Form } from "react-router-dom";

const Show = (props) => {
    const contact = useLoaderData()
    return (
        <>
        <div>
            <div><h3> {contact.name}</h3></div>
            <div><h3> {contact.address}</h3></div>
            <div><h3> {contact.email}</h3></div>
            <div><h3> {contact.phone_number}</h3></div>
            <div><h3> {contact.url}</h3></div>
        </div>
        <Link to="/">
        <button>Go Back</button>
      </Link>
      <div >
        <Form action={`/update/${contact.id}`} method="post">
          <input
            type="text"
            name="name"
            placeholder="name"
            defaultValue={contact.name}
          />
          <input
            type="text"
            name="address"
            placeholder="address"
            defaultValue={contact.address}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            defaultValue={contact.email}
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Phone"
            defaultValue={contact.phone_number}
          />
          <div className="update_container">
            <button className="update_btn">Update</button>
          </div>
        </Form>
        <div className="delete_container">
          <Form action={`/delete/${contact.id}`} method="post">
            <button >Delete</button>
          </Form>
        </div>
      </div>
        </>
    )
  };
  
  export default Show;