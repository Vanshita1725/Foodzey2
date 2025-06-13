import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import './app.css'
import { Link, Outlet } from "react-router";

function exebar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <div className="nav">
                <button onClick={toggleOffcanvas} className=" text-black py-2 px-4 rounded">
                    <FontAwesomeIcon icon={faGripLines} />
                </button>
                <div>
                    <ul style={{ display: 'flex', gap: '50px' }}>
                        <li>
                            <Link className="link" to="/">home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Category">Catrgpry</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Products">Products</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Pages">Pages</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Blog">Blog</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Element">Element</Link>
                        </li>
                    </ul>

                </div>

                <div style={{ display: 'flex', gap: '30px' }}>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>+123 ( 456 ) ( 7890 )</p>
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-lg transform transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4">
                    <button onClick={toggleOffcanvas} className="text-gray-500 hover:text-gray-700">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <h2>Offcanvas Content</h2>
                </div>

            </div>
            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={toggleOffcanvas}
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"

                ></div>
            )}
            <Outlet />
        </div>
    )
}
export default exebar;





const Nevbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-white '>
      {/* Main Nav */}
      <div className='flex items-center font-medium  justify-between px-4 py-3 md:justify-around'>
        <div className='text-3xl flex justify-end w-full md:justify-start md:w-auto md:left  relative'>
          <button onClick={toggleOffcanvas}>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className='   md:flex hidden uppercase gap-8   font-[poppins]'>
          {["Home", "Category", "Products", "Pages", "Blog", "Element"].map((item, idx) => (
            <li key={idx} className="relative no-underline ">
              <Link
                to={`/${item === "Home" ? "" : item}`}
                className="px-3 py-7 inline-block text-inherit"
              >
                {item}
              </Link>
              <ion-icon name="chevron-down"></ion-icon>
            </li>

          ))}
        </ul>

        {/* Contact (Desktop Only) */}
        <ul className='md:flex hidden items-center gap-2'>
          <li className='text-xl relative font-[Segoe]'>
            <ion-icon name="call"></ion-icon>
          </li>
          <li className='text-sm font-medium'>+123 (456) (7890)</li>
        </ul>
      </div>
      <div>
        {/* Logo */}
        <div className='md:flex  hidden items-center space-x-2'>
          <img src={logo} alt="Logo" className='w-28 md:w-40' />
        </div>
      </div>

      {/* Mobile Offcanvas Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className='flex items-center justify-between p-4 border-b'>
          <img src={logo} alt="Logo" className='w-24' />
          <button onClick={toggleOffcanvas} className='text-2xl'>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <ul className='flex flex-col p-4 gap-4 font-[poppins] uppercase'>
          {["Home", "Category", "Products", "Pages", "Blog", "Element"].map((item, idx) => (
            <li key={idx}>
              <Link
                to={`/${item === "Home" ? "" : item}`}
                className='block text-gray-800 hover:text-blue-600'
                onClick={toggleOffcanvas}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className='p-4 border-t'>
          <p className='text-sm text-gray-600'>Contact: +123 (456) (7890)</p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleOffcanvas}
          className="fixed inset-0 bg-black opacity-25 z-40 md:hidden"
        ></div>
      )}

      {/* Page Content */}
      <Outlet />
    </nav>
  );
};

export default Nevbar;
