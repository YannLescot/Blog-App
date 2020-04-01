import React, {useState} from 'react'

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    const [blogPosts, setBlogPosts] = useState([])

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }
    ])
    }

    //Au lieu de addBlogPost:addBlogPost, on peut ne l'écrire qu'une fois
    return ( <BlogContext.Provider value={{ data: blogPosts, addBlogPost:addBlogPost }} > 
        {children}
    </BlogContext.Provider> )
}

export default BlogContext;