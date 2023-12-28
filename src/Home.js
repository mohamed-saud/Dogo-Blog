import Blog from "./Blog";
import useFeach from "./useFeach";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFeach("http://localhost:3000/blogs ");

  return (
    <div className="home">
      {isPending && <div>Loading.... </div>}
      {error && <div>{error} </div>}
      {blogs && <Blog blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
