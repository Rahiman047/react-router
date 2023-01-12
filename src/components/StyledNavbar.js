import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")} // isActive provided by react default and we can access isActive value using the function
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Products
      </NavLink>
    </nav>
  );
};
export default StyledNavbar;
