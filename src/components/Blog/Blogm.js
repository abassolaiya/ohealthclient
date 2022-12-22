// import { useBlogsContext } from "../../hooks/useBlogsContext";
// import { useAuthContext } from "../../hooks/useAuthContext";
import './blog.css';
import Image from '../img/cont.png';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Link } from "react-router-dom";

const BlogDetails = ({ blog }) => {
    // const { dispatch } = useBlogsContext()
    // const { user } = useAuthContext()

    // const handleClick = async () => {
    //     if (!user) {
    //         return
    //     }

    //     const response = await fetch('/api/blogs/' + blog._id, {
    //         method: 'DELETE',
    //         header: {
    //             'Authorization':`Bearer ${user.token}`
    //         }
    //     })
    //     const json = await response.json()

    //     if (response.ok) {
    //         dispatch({type: 'DELETE_BLOG', payload:json})
    //     }
    // }

    return (
        <Link className="blog-list" to={`/blogs/blog/${blog._id}`} >
            <div className="blog-list-title" >{blog.title}</div>
            <div className="blog-list-desc" >
            { blog.desc ? blog.desc.split(' ').splice(0, 20).join(' ') : '' }...
            </div>
            <img src={blog ? blog.img : {Image}} className="blog-list-img" alt='Blog img'/>
            <div className="blog-list-btm" >

                <div>View Article</div>

                <div> {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })} </div>

            </div>
            {/* <Link to={`/blogs/blog/${blog._id}`} > Go to blog </Link>
            <div>
                <img className='' src={blog.img}  alt={blog.title} />
            </div>
            <p>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>
            <p>{blog.desc.split(' ').splice(0, 20).join(' ')}...</p>
            <span className="" onClick={handleClick}>delete</span> */}
        </Link>
    ) 
}
export default BlogDetails;