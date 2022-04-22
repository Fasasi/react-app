import Home from "./components/Home";
import style from "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPage from "./components/MyPage";
import Ecourses from "./components/Ecourses";
import EcoursesData from "./components/EcoursesData";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

const App = () => {
  const courseMenu = EcoursesData.map((item) => {
    return (
      <div className="ecourse-page">
        <Ecourses
          image={item.image}
          title={item.title}
          descript={item.descrip}
          button={item.button}
        />
        <hr />
      </div>
    );
  });

  return (
    <Router className="maxwidth">
      <Nav />
      <Routes>
        <Route path="/"  className="homepage" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ecourse" element={<div className="paggee">
        <p className=" testing">Ecourses Sample</p>
        {courseMenu}
      </div>} />
        
     
      </Routes>

         <footer>
          <span>Designed By</span> Fasasi Abdulwasih Oluwatobi
        </footer>
    </Router>
  );
};

export default App;
