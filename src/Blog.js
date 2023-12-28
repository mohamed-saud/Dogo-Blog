import { Link } from "react-router-dom";

const Blog = ({ blogs, title }) => {
  return (
    <div className="blog=list">
      <h1 style={{ marginBottom: "30px" }}>{title}</h1>
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} key={blog.id}>
          <div className="blog-preview">
            <h2>{blog.title}</h2>
            <p>write by {blog.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
