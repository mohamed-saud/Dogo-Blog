import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDitals from "./BlogDetals";
import NotFind from "./NotFind";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDitals />} />
            <Route path="*" element={<NotFind />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
