import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
const Nav = () => {
  function menuList(){
    return(
      <div className="menuLink">
        
      </div>
    )
  }
    return ( 
        <div className="nav-wrapper">
      <div className="nav-box">
        <div className="logo-box">
          <img src={logo} alt="" className="logo" />
          <h1 className="logo-text">REXGRID</h1>
          <div className="handBurger"><BiMenuAltRight onClick={menuList}/></div>
        </div>
        <div className="nav-list">
            <Link to="/" className="home">Home</Link>
          
          <Link to="/ecourse" className="e-course">
            E-Courses</Link>
          
          
          <Link to="/about">About</Link>
    
          
          <Link to="/contact">Contact</Link>
        
        </div>
      </div>

    </div>
     );
}
 
export default Nav;