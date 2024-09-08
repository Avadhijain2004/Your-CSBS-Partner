// import React from 'react'
// import logo from './../assets/logo_aj.png'
// import { Link } from 'react-router-dom'

// function Header() {
//     return (
//         <section>
//             <div className='h-20 flex justify-between text-lg ml-12'>
//                 <img src={logo} alt="" className='w-20 mx-10 mt-3'/>
//                 <div>
//                     <ul className='flex gap-6 pt-6 justify-end mr-10'>
//                         <Link to='/home'><li className='hover:text-[#646cff] hover:font-bold'>Home</li></Link>

//                         <Link to='/about'><li className='hover:text-[#646cff] hover:font-bold'>About</li></Link>

//                         <li className='hover:text-[#646cff] hover:font-bold'>Services</li>

//                         <li className='hover:text-[#646cff] hover:font-bold'>Courses</li>

//                         <li className='hover:text-[#646cff] hover:font-bold'>Contact</li>

//                     </ul>
//                 </div>
//                 <div>
//                     <button className='button m-4 mr-28 hover:font-bold mt-6'>Subscribe</button>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Header

import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./../assets/logo_aj.png";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/courses",
    display: "Courses",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("sticky__header");
      } else {
        headerRef.current?.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div
      className="h-20 bg-primary font-heading bg-no-repeat bg-center bg-cover w-full "
      ref={headerRef}
    >
      <div className="flex items-center justify-between px-4 md:px-8 md:pt-0 pt-4">
        {/*==========Logo========= */}
        <div>
          <img className="m-2 md:m-6 md:ml-10 w-16 mx-10" src={logo} alt="Logo" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-8 h-8 text-offWhite"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/*==========Menu Items========= */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center md:gap-[2.7rem] absolute md:static bg-primary top-20 right-0 md:bg-transparent w-full md:w-auto`}
          ref={menuRef}
        >
          <ul className="flex flex-col md:flex-row items-center  md:gap-[2.7rem] p-4 md:p-0 text-xl gap-6 pt-6 justify-end mr-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-lg text-[#646cff]  leading-7 font-[600]"
                      : "text-lg leading-7 font-[500] hover:text-blue-500"
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
          <div>
            <button className="button m-4 mr-20 hover:font-bold mt-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
