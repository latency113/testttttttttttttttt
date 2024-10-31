import React from "react";
import { NavLink } from "react-router-dom";
const Layout = ({ children }) => (
  <div className="layout">
    <header>
      <nav>
        <NavLink to="/" activeClassName="active">
          หน้าหลัก
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          เกี่ยวกับ
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          ติดต่อ
        </NavLink>
        <NavLink to="/product" activeClassName="active">
          Product
        </NavLink>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>&copy; Khan Samnuan</p>
    </footer>
  </div>
);
export default Layout;
