import { Link } from "react-router-dom";

const Contacts =(props) => {
    const post = props.post
    return (
    <div>
<Link to={`/contacts/${post.id}`}>
        <h1>{post.name}</h1>
        <div>
            {post.address}
        </div>
      </Link>
    </div>
    
    )
}

export default Contacts