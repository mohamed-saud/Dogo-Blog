import { useNavigate, useParams } from "react-router-dom";
import useFeach from "./useFeach";

const BlogDitals = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFeach("http://localhost:3000/blogs/" + id);

  /// delete blog from API
  const handeDeletBlog = function () {
    fetch("http://localhost:3000/blogs/" + id, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };
  return (
    <div>
      <h2>Blog details</h2>
      {isPending && <div>Loading.... </div>}
      {error && <div>{error} </div>}
      {blog && (
        <div className="blog-preview">
          <h1>{blog.title}</h1>
          <h5>write by {blog.author}</h5>
          <p>{blog.body}</p>
          <button onClick={() => handeDeletBlog(blog.id)}>Delete Blog</button>
        </div>
      )}
    </div>
  );
};

export default BlogDitals;
