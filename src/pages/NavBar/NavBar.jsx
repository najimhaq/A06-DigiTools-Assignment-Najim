import { MdOutlineShoppingCart } from 'react-icons/md';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-start'>
        <div className='flex items-center gap-1 font-bold text-xl'>
          <h1
            className='text-5xl font-extrabold 
               bg-linear-to-r from-blue-500 to-purple-600 
               bg-clip-text text-transparent'
          >
            DigiTools
          </h1>
        </div>
      </div>
      <div className='navbar-center hidden md:flex'>
        <ul className='menu menu-horizontal gap-5 px-1 text-lg'>
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
      <div className='navbar-end gap-5'>
        <span>
          <MdOutlineShoppingCart className='text-3xl' />
        </span>
        <button className='btn'>
          <a className=' text-lg font-semibold'>Login</a>
        </button>
        <a className='btn bg-linear-to-r from-blue-500 to-purple-600 rounded-full text-white'>
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;
