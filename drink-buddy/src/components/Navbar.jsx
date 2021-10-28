import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link id= 'home' to="/"><h3>Home</h3></Link>
      <Link id= 'newdrink' to="/newdrink"><h3>Add a Drink</h3></Link>
      <Link id= 'about' to="/about"><h3>About</h3></Link>
    </div>
  )
}

export default Navbar
