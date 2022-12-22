// import { useBlogsContext } from "../../hooks/useBlogsContext";
// import { useAuthContext } from "../../hooks/useAuthContext";
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useEffect, useState } from "react";
import Axios from 'axios'
import Image from '../img/cont.png';
import Navbar from "../Navbar/Navbar";

const BlogDetails = ({params}) => {
    const navigate = useNavigate();
    const { blogid } = useParams()
    const [error] = useState(null)

    // const { dispatch } = useBlogsContext()
    // const { user } = useAuthContext()

    const [ Blog, setBlog ] = useState(null)

    const [ Comment, setComment ] = useState('')

    useEffect( () => {
        
        // get the blog details here

        // na the blog id be this
        const blog_id = blogid

        Axios.get(`/api/blog/${blog_id}`)
            .then( (response) => {
                console.log(response.data)
                setBlog(response.data)
            } )
            .catch( (err) => {
                console.log(err.response.data)
            } )

    }, [blogid] )


    const handleBlogComment = () => {

        Axios.post(`/api/blog/${blogid}/commentBlog`,{value:Comment})
            .then( (response) => {
                // console.log(response.data)
                setBlog(response.data)
            } )
            .catch( (err) => {
                // console.log(err.response.data)
                navigate('/login');
            } )
    }


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
        <>
            <Navbar/>

            <div className="blog_details-div" >

                <div className="blog_details-div-title" >
                    { Blog ? Blog.title : "" }
                </div>

                <img className="blog_details-div-img" src={Blog ? Blog.img : Image} alt=''/>

                <div className="blog_details-div-det" >
                <ReactMarkdown children={ Blog ? Blog.desc : "" } remarkPlugins={[remarkGfm]} />
                

                    <div className="comment-section" >

                        <div className="comment-section-top" >
                            Add a comment
                        </div>

                        {/* <textarea className="comment-section-textarea" > */}
                        <input 
                            type="text"
                            onChange={(e) => setComment(e.target.value)}
                            value={Comment}
                            className="comment-section-textarea" 
                            placeholder='You have to be logged in before you can comment'></input>
                            {/* // className={emptyFields.includes('desc') ? 'error' : ''} */}
                        {/* /> */}

                        <button className="comment-section-btn" onClick={ () => handleBlogComment() } >
                            Post comment
                        </button>
                        {error && <div className="error">{error}</div>}

                        {/* </textarea> */}

                        {/* <button className="comment-section-btn" >
                            Post comment
                        </button> */}

                    </div>

                    <div className="comment-section-top" style={{marginTop:"4rem"}} >
                        Comments
                    </div>

                    <div className="comment-div" >
                        <div className="comment-div-name">OHealth User</div>
                        {/* <div className="comment-div-name" > Abass Olaiya Samuel </div>
                        <div className="comment-div-date" > 4 months ago </div>
                        <div className="comment-div-comment" > */}
                        { Blog ?
                            Blog.comments.map( (comment,index) => {
                                return <div className="comment-div-comment"  key={index} >
                                    <div className="comment-div-name">OHealth User</div>
                                    {comment}
                                </div>
                            } )
                        : '' }
                        </div>
                    {/* </div> */}

                </div>

            </div>
            
        </>
    )
}
export default BlogDetails;