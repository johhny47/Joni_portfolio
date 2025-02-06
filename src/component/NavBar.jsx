import logo from '../assets/favicon.png'

const NavBar = () => {
  const link = <>
   <li>
                <a href="#about" className="hover:text-indigo-300 font-bold">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-300 font-bold">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-300 font-bold">
                  Contact
                </a>
              </li>
  </>
    return (
      <div className="navbar bg-base-100 fixed w-full  top-0 left-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {link}
            </ul>
          </div>
          <a className="items-center md:px-10">
  <img 
    src={logo} 
    className="h-10 md:h-16 " 
    alt="Logo" 
  />
</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         {link}
          </ul>
        </div>
        <div className="navbar-end items-center">
        <a 
          href="../public/asset/resume.pdf" 
          download="Joni_Fakir_Resume.pdf" 
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Resume
        </a>
        </div>
      </div>
  
    );
};

export default NavBar;