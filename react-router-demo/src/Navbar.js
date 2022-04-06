import { NavLink } from "react-router-dom";
import "./styles/style.css";

const Navbar = () => {
const navLinkStyle = ({isactive}) => {
  return {
     fontWeight: isactive ? 'bold' : 'normal',
     textDecoration: isactive ? 'none' : 'underline'
  }
}


  return (
   <nav>
      <NavLink style={navLinkStyle} to='/'>Home</NavLink>
      <NavLink style={navLinkStyle} to='/about'>About</NavLink>
   </nav>
  )
}

export default Navbar