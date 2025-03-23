import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo1 from '/images/logo1.png'; 
import logo from '/images/logo.jpg'; 

export const Header = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const handleToggle = (e) => {
        setTheme(e.target.checked ? "dark" : "light");
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    return (
        <>
            <nav className={`border-gray-200 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                    <NavLink to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                   
                        <img src={logo1} className="h-10 rounded-full" alt="Logo" />
                        <span className={`self-center text-2xl font-semibold whitespace-nowrap ${theme === "dark" ? "text-white" : "text-gray-900"}`}>AnimeFlix</span>
                       
                    </NavLink>
                    
                    <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className={`flex text-sm rounded-full md:me-0 focus:ring-4 ${theme === "dark" ? "bg-gray-800 focus:ring-gray-600" : "bg-gray-200 focus:ring-gray-300"}`}
                            id="user-menu-button"
                            aria-expanded={isDropdownOpen}
                            onClick={toggleDropdown}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src={logo} alt="user photo" />
                        </button>

                        {isDropdownOpen && (
                            <div className={`absolute top-6 right-1 z-50 my-4 text-base list-none divide-y rounded-lg shadow ${theme === "dark" ? "bg-gray-700 divide-gray-600" : "bg-white divide-gray-100"}`}>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <NavLink to="/" className={`block px-8 border-y-1 py-2 text-sm ${theme === "dark" ? "text-gray-200 hover:bg-gray-600" : "text-gray-700 hover:bg-gray-100"}`}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact" className={`block px-8 border-y-1 py-2 text-sm ${theme === "dark" ? "text-gray-200 hover:bg-gray-600" : "text-gray-700 hover:bg-gray-100"}`}>Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/movie" className={`block px-8 border-y-1 py-2 text-sm ${theme === "dark" ? "text-gray-200 hover:bg-gray-600" : "text-gray-700 hover:bg-gray-100"}`}>Movie</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/portfolio" className={`block px-8 border-y-1 py-2 text-sm ${theme === "dark" ? "text-gray-200 hover:bg-gray-600" : "text-gray-700 hover:bg-gray-100"}`}>Blog</NavLink>
                                    </li>
                                    <li>
                                         <NavLink to="/service" className={`block px-8 border-y-1 py-2 text-sm ${theme === "dark" ? "text-gray-200 hover:bg-gray-600" : "text-gray-700 hover:bg-gray-100"}`}>Service</NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg ${theme === "dark" ? "bg-gray-800 md:bg-gray-900" : "bg-white"} md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}>
                            <li>
                                <NavLink to="/" className={`block py-2 px-3 ${theme === "dark" ? "text-white bg-blue-700" : "text-gray-900 rounded hover:bg-white"} md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`} aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={`block py-2 px-3 ${theme === "dark" ? "text-white" : "text-gray-900 rounded hover:bg-white"} md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500`} >About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/service" className={`block py-2 px-3 ${theme === "dark" ? "text-white" : "text-gray-900 rounded hover:bg-white"} md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500`} >Services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/movie" className={`block py-2 px-3 ${theme === "dark" ? "text-white" : "text-gray-900 rounded hover:bg-white"} md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500`} >Movie</NavLink>
                                
                            </li>
                            <li>
                                <NavLink to="/portfolio" className={`block py-2 px-3 ${theme === "dark" ? "text-white" : "text-gray-900 rounded hover:bg-white"} md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500`} >Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={`block py-2 px-3 ${theme === "dark" ? "text-white" : "text-gray-900 rounded hover:bg-white"} md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500`} >Contact</NavLink>
                            </li>
                            <label className="swap swap-rotate ml-24 pl-12">
                                <input
                                    type="checkbox"
                                    onChange={handleToggle}
                                    checked={theme === "dark"}
                                />
                                <svg
                                    className="swap-on h-8 w-8 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a 1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>
                                <svg
                                    className="swap-off h-8 w-8 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};