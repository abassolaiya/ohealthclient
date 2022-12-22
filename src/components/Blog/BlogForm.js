import { useState } from "react";
// import FileBase64 from 'react-file-base64';
// import { useBlogsContext } from "../../hooks/useBlogsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import Axios from "axios";
import Navbar from "../Navbar/Navbar";
import { TopInfo } from "../topInfo/topinfo";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
    // const { dispatch } = useBlogsContext()
    const { user } = useAuthContext()
    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    // const [img, setImg] = useState(null)
    const [error, setError] = useState(null)
    // const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }


        Axios.post('/api/blog',{title,desc})
            .then( (response) => {
                // console.log(response.data)
                navigate('/blogs');
            } )  
            .catch( (err) => {
                console.log(err.response.data)
                // navigate('/blogs');
            } )

    }

    return (
        <div>

            <Navbar/>

            <div style={{
                width:"90%",
                margin:"3rem auto"
            }} >
            <TopInfo
                title={"Post Blog"}
            /></div>

            <form className="post_blog" onSubmit={handleSubmit}>

                <div className="post_blog_div" >
                    <label>Article Title</label>
                    <input 
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder={"Article Title"}
                        // className={emptyFields.includes('title') ? 'error' : ''}
                    />
                </div>

                <div className="post_blog_div" >
                    <label>Article Body</label>
                    <textarea 
                        type="text"
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                        placeholder={"Article Body"}
                        // className={emptyFields.includes('desc') ? 'error' : ''}
                    />
                </div>

                <div className="post_blog_div" >
                    <label>Article Image</label>
                    {/* <FileBase64 
                        type="file" 
                        multiple={false} 
                        onDone={ (well) => setImg(well.base64) }
                        // onChange={({ base64 }) => setImg(base64)}
                        value={img}
                    /> */}
                </div>

                <button className="post_blog_sbt" >Post Article</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default BlogForm