import { MdOutlineShoppingCart } from 'react-icons/md';
import { useProps } from '../../utils/CartContext';

const NavBar = () => {
  const { carts } = useProps();
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
        <div className='relative inline-flex items-center'>
          <MdOutlineShoppingCart className='text-3xl' />
          <span className='absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white'>
            {carts.length}
          </span>
        </div>

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
