import { useState } from 'react';
import { MdMenuOpen, MdOutlineShoppingCart } from 'react-icons/md';
import { useProps } from '../../utils/CartContext';

const NavBar = () => {
  const { carts } = useProps();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='navbar bg-base-100/95 backdrop-blur-md sticky top-0 z-50 shadow-lg'>
      <div className='navbar-start'>
        <div className='flex items-center gap-2'>
          <h1
            className='text-2xl md:text-4xl lg:text-5xl font-black 
            bg-gradient-to-r from-blue-500 to-purple-600 
            bg-clip-text text-transparent'
          >
            DigiTools
          </h1>
        </div>
      </div>

      {/* Desktop Center Menu */}
      <div className='navbar-center hidden md:flex'>
        <ul className='menu menu-horizontal gap-6 px-1 text-lg'>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      {/* Right Side - Cart + Buttons + Mobile Menu */}
      <div className='navbar-end gap-2 md:gap-4'>
        {/* Cart Icon */}
        <div className='relative btn btn-ghost btn-circle md:btn-lg'>
          <MdOutlineShoppingCart className='text-xl md:text-3xl' />
          {carts.length > 0 && (
            <span className='absolute -top-1 -right-1 md:-top-2 md:-right-2 flex h-4 md:h-5 min-w-4 md:min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] md:text-xs font-bold text-white shadow-lg'>
              {carts.length}
            </span>
          )}
        </div>

        {/* Login Button */}
        <button className='btn btn-outline hidden sm:inline-flex text-lg font-semibold'>
          Login
        </button>

        {/* Get Started Button */}
        <a
          className='btn btn-gradient bg-gradient-to-r from-blue-500 to-purple-600 
          text-white normal-case font-semibold text-sm sm:text-lg rounded-full 
          hover:from-blue-600 hover:to-purple-700 shadow-lg'
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          className='btn btn-ghost btn-circle lg:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MdMenuOpen className='text-xl md:text-3xl' />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className='absolute top-full left-0 right-0 bg-base-100 shadow-2xl border-t border-base-200 p-4 lg:hidden'>
          <ul className='menu w-full rounded-box p-4 gap-2 text-lg'>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li className='menu-title'>
              <span>Account</span>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
