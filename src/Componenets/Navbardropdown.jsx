import { useState } from "react";
import { Link } from "react-router-dom"; // Corrected to react-router-dom

const Navbardropdown = ({ mode = 'horizontal' }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navItems = [
    {
      label: 'Home',
      path: '/',
      key: 'Home',
      dropdown: [
        { label: 'Home 1', path: '/Home1' },
        { label: 'Home 2', path: '/Home2' },
      ],
    },
    {
      label: 'Category',
      path: '/Category',
      key: 'category',
      dropdown: [
        { label: 'Home 1', path: '/Home1' },
        { label: 'Home 2', path: '/Home2' },
      ],
    },
    {
      label: 'Product',
      path: '/products',
      key: 'Product',
      dropdown: [
        { label: 'Productlist', path: '/Productlist2' },
        { label: 'Allproduct', path: '/Allproductlist' },
      ],
    },
    {
      label: 'Pages',
      path: '/Pages',
      key: 'Pages',
      dropdown: [
        { label: 'Faq', path: '/Faq' },
        { label: 'Home 2', path: '/Home2' },
      ],
    },
    {
      label: 'Blog',
      path: '/Blog',
      key: 'Blog',
      dropdown: [
        { label: 'Home 1', path: '/Home1' },
        { label: 'Home 2', path: '/Home2' },
      ],
    },
    {
      label: 'Element',
      path: '/Element',
      key: 'Element',
      dropdown: [
        { label: 'Home 1', path: '/Home1' },
        { label: 'Home 2', path: '/Home2' },
      ],
    },
  ];

  return (
    <ul
      className={`${
        mode === 'horizontal' ? 'lg:flex hidden' : 'flex flex-col'
      } pl-4 pt-3 gap-4 font-[poppins] bg-white relative z-50`}
    >
      {navItems.map((item) => (
        <li className="relative px-1 py-3" key={item.key}>
          <div className="flex items-center justify-between gap-2">
            <Link
              to={item.path}
              className="text-black text-sm !no-underline hover:underline focus:outline-none"
            >
              {item.label}
            </Link>
            {item.dropdown && (
              <button
                onClick={() => toggleDropdown(item.key)}
                className="text-black"
              >
                <ion-icon name="chevron-down-outline"></ion-icon>
              </button>
            )}
          </div>

          {activeDropdown === item.key && item.dropdown && (
            <ul
              className={`${
                mode === 'horizontal'
                  ? 'absolute top-full left-0 mt-2'
                  : 'pl-4 mt-1'
              } w-40 bg-white shadow-md rounded z-50`}
            >
              {item.dropdown.map((subItem, idx) => (
                <li key={idx}>
                  <Link
                    to={subItem.path}
                    className="block px-4 py-2 text-sm !text-gray-700 hover:bg-gray-100 !no-underline"
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navbardropdown;
