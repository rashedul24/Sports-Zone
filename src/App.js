import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/./Category/Category";
import SingleCategory from "./components/SingleCategory/SingleCategory";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Trainer from "./components/Trainers/Trainers";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="category" element={<Category/>} />
          <Route path="category/:id" element={<SingleCategory />} />
          <Route path="trainers" element={<Trainer/>} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
