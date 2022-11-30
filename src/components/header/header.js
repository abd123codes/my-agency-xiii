import { Hamburger } from "./icons/hamburger";
import { NavLink } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Hamburger />
      <NavLink
        style={{ textDecoration: "underline", color: "#080A16" }}
        className="link"
        to="/"
      >
        Let's Talk
      </NavLink>
    </header>
  );
};
