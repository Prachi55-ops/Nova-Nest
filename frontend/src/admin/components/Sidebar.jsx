import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaPlusCircle,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";


function Sidebar() {
  const location = useLocation();

  const menuItems = [
   
    {
      name: "Add Product",
      path: "/admin/add-product",
      icon: <FaPlusCircle />,
    },
    {
      name: "Products",
      path: "/admin/products",
      icon: <FaBoxOpen />,
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: <FaShoppingCart />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <FaUsers />,
    },
  ];

  return (
    <div className="sidebar">
      <h3 className="logo">Admin Panel</h3>

      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            <Link to={item.path}>
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;