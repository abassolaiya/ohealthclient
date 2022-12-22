import { useEffect, useState } from "react";
import { useBlogsContext } from './../../hooks/useBlogsContext';
import { useAuthContext } from "../../hooks/useAuthContext";
import './blog.css'

import BlogDetails from "./Blogm";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Blog = () => {
    const { dispatch} = useBlogsContext()
    const {user} = useAuthContext()

    const [ FreshBlogs, setFreshBlogs ] = useState(null)

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('api/blog', {
                // headers: {'Authorization': `Bearer ${user.token}`},
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_BLOGS', payload:json})
                setFreshBlogs(json)
                console.log(json)
            }
        }
        fetchBlogs()
        // if (user) {
        //     fetchBlogs()
        // }
    }, [dispatch, user])

    return (
        <div>
            <Navbar/>

            <div className="blog_div" >

                <div className="blog_div_txt" >
                    Blogs
                </div>

                <div className="blog_div_sub_txt" >
                    Get quick access to uptodate Health care information
                </div>

                <div className="blogs_list-div" >
                { FreshBlogs ? FreshBlogs.data.map((blog) => (
                    <BlogDetails key={blog._id} blog={blog} />
                )) : "no blogs yet" }
                </div>


            </div>

            <Footer/>

            {/* <div>
            
            </div> */}
        </div>
    )
}

export default Blog