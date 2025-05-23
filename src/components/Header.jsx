import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    // Daftar rute yang tersedia (sesuai dengan App.jsx)
    const availableRoutes = [
        { name: "dashboard", path: "/" },
        { name: "orders", path: "/orders" },
        { name: "customers", path: "/customers" },
        { name: "membership", path: "/membership" },
        { name: "error", path: "/ErrorPage" },
        { name: "error 401", path: "/error/401" },
        { name: "error 403", path: "/error/403" },
        { name: "users", path: "/users" },
        { name: "products", path: "/products" },
    ];

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const searchLower = searchText.toLowerCase().trim();

            // Cari rute yang cocok dengan input pencarian
            const matchedRoute = availableRoutes.find(route =>
                route.name === searchLower
            );

            if (matchedRoute) {
                navigate(matchedRoute.path);
                setSearchText("");
            }
        }
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                        <a href="#" className="flex ms-2 md:me-24">
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">Sedap<b className="text-hijau">.</b></span>
                        </a>
                    </div>

                    {/* Search Bar */}
                    <div id="search-bar" className="relative w-full max-w-lg">
                        <input
                            id="search-input"
                            className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none"
                            type="text"
                            placeholder="Search Here..."
                            value={searchText} 
                            onChange={handleSearch}
                            onKeyDown={handleKeyDown}
                        />
                        <FaSearch id="search-icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
                    </div>

                    {/* Icon & Profile Section */}
                    <div id="icons-container" className="flex items-center space-x-4">
                        {/* Icons */}
                        <div id="notification-icon" className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
                            <FaBell />
                            <span id="notification-badge" className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs">50</span>
                        </div>
                        <div id="chart-icon" className="p-3 bg-blue-100 rounded-2xl cursor-pointer">
                            <FcAreaChart />
                        </div>
                        <div id="settings-icon" className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
                            <SlSettings />
                        </div>

                        {/* Profile Section */}
                        <div id="profile-container" className="flex items-center space-x-4 border-l pl-4 border-gray-300">
                            <span id="profile-text" className="hidden md:block">
                                Hello, <b>Rezki Saputra</b>
                            </span>
                            <img
                                id="profile-avatar"
                                src="https://avatar.iran.liara.run/public/28"
                                className="w-10 h-10 rounded-full"
                                alt="User avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
