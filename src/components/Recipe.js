import { Link } from "react-router-dom";

const Recipe =(props) => {
    const post = props.post
    return (
        <>
   
<div class="max-w-sm m-2 bg-white border border-gray-600 rounded-lg shadow dark:bg-teal-800 dark:border-gray-700 " >
    <Link to={`/recipe/${post.id}`}>
        <img class="rounded-t-lg w-full h-64 " src={post.image} alt="" />
    </Link>
    <div class="p-5">
        <Link to={`/recipe/${post.id}`}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-emerald-300">{post.name}</h5>
        </Link>
        
    </div>
</div>

    
   </> )
}

export default Recipe