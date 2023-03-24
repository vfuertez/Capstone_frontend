import { Link, useLoaderData } from "react-router-dom";

const Show = (props) => {
    const contact = useLoaderData()
    return (
        <div>
            <div><h3> {contact.name}</h3></div>
        
            <div><h3> {contact.address}</h3></div>
            <div><h3> {contact.email}</h3></div>
            <div><h3> {contact.phone_number}</h3></div>
            <div><h3> {contact.url}</h3></div>
        </div>
    )
  };
  
  export default Show;