import {
  BellOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dealerz.
        </NavLink>
      </div>
      <div className="navbar__navigation navigation">
        <Search
          placeholder="Search what you need"
          allowClear
          className="navigation__search"
        />
        <ul className="navigation-menu">
          <li className="navigation-menu__favorites">
            <NavLink
              to={"/favorites"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <HeartOutlined />
            </NavLink>
          </li>
          <li className="navigation-menu__basket">
            <NavLink
              to={"/basket"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <ShoppingCartOutlined />
              <span className="badge">2</span>
            </NavLink>
          </li>
          <li className="navigation-menu__profile">
            <NavLink
              to={"/profile"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <UserOutlined />
            </NavLink>
          </li>
          <li className="navigation-menu__notification">
            <NavLink
              to={"/notification"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <BellOutlined />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
