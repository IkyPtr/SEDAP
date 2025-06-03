import { MdDashboard, MdPerson, MdShoppingCart, MdInventory } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { MdError } from "react-icons/md";
import {MdFastfood} from "react-icons/md";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-lg p-2 space-x-3 text-gray-900
        ${isActive
      ? "bg-gray-100 font-medium"
      : "hover:bg-gray-100"
    }`;
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <MdDashboard className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/orders" className={menuClass}>
              <MdShoppingCart className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/customers" className={menuClass}>
              <MdPerson className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span>Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-7" to="/users" className={menuClass}>
              <MdPerson className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-8" to="/products" className={menuClass}>
              <MdInventory className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              id="menu-4"
              to="/pesanan"
              className={menuClass}
            >
              <MdFastfood className="mr-4 text-xl" />
              Pesanan
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-8" to="/notes" className={menuClass}>
              <MdInventory className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span>Notes</span>
            </NavLink>
          </li>

          {/* Error Pages Menu - Bisa dikelompokkan dalam dropdown */}
          <li>
            <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100">
              <MdError className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Error Pages</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <ul className="py-2 space-y-2">
              <li>
                <NavLink id="menu-4" to="/ErrorPage" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Error Page</NavLink>
              </li>
              <li>
                <NavLink id="menu-5" to="/error/401" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Error 401</NavLink>
              </li>
              <li>
                <NavLink id="menu-6" to="/error/403" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Error 403</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
}
