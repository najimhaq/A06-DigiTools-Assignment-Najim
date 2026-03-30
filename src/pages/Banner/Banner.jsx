import BannerImage from '../../assets/banner.png';
import { SiCircle } from 'react-icons/si';
import { FiPlay } from 'react-icons/fi';
const Banner = () => {
  return (
    <>
      <div className='relative min-h-162.5 flex items-center overflow-hidden'>
        <div className=' mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10'>
          {/* Left Content */}
          <div className='space-y-4'>
            <div className='inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium px-5 py-2 rounded-full'>
              <SiCircle />
              New: AI-Powered Tools Available
            </div>

            <h1 className='text-4xl lg:text-7xl font-black leading-tight tracking-tighter text-[#101727]'>
              Supercharge Your <br /> Digital Workflow
            </h1>

            <p className='text-lg text-[#627382] max-w-lg'>
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>

            <div className='flex flex-wrap gap-4 pt-4'>
              <button
                type='button'
                className='text-white rounded-full bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5'
              >
                Explore Products
              </button>
              <button
                class='relative inline-flex items-center justify-center p-[2px] 
               overflow-hidden text-sm font-medium rounded-full 
               bg-gradient-to-r from-blue-500 to-purple-600 
               focus:ring-2 focus:ring-transparent'
              >
                <span class='px-4 py-2.5 rounded-full bg-white text-blue-600 font-semibold'>
                  <div className='flex justify-center items-center'>
                    <FiPlay className='font-black' />
                    <span>Watch Demo</span>
                  </div>
                </span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className='relative flex justify-center lg:justify-end'>
            <div className='relative'>
              <img
                className='relative h-100 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse'
                src={BannerImage}
                alt='DigiTools'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
