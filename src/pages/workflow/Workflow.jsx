import { FiPlay } from 'react-icons/fi';

const Workflow = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-600 to-purple-600 px-6 sm:px-12 lg:px-24 py-12 sm:py-20 lg:py-28'>
      <div className='text-center text-white max-w-3xl mx-auto'>
        <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl mb-3'>
          Ready to Transform Your Workflow?
        </h1>
        <p className='font-normal text-sm sm:text-base'>
          Join thousands of professionals who are already using Digitools to
        </p>
        <p className='font-normal text-sm sm:text-base'>
          work smarter. Start your free trial today.
        </p>
      </div>

      <div className='mt-10'>
        <div className='flex flex-wrap gap-4 pt-4 justify-center'>
          <button
            type='button'
            className='text-purple-600 rounded-full bg-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium text-sm sm:text-base px-4 sm:px-6 py-2.5 text-center leading-5'
          >
            Explore Products
          </button>
          <button
            className='relative inline-flex items-center justify-center p-[2px] 
              overflow-hidden text-sm sm:text-base font-medium rounded-full 
              bg-gradient-to-r from-blue-500 to-purple-600 
              focus:ring-2 focus:ring-transparent'
          >
            <span className='px-4 sm:px-6 py-2.5 rounded-full bg-white text-blue-600 font-semibold'>
              <div className='flex justify-center items-center gap-2'>
                <FiPlay className='font-black' />
                <span>Watch Demo</span>
              </div>
            </span>
          </button>
        </div>
        <p className='text-center font-normal mt-2 text-white text-xs sm:text-sm'>
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Workflow;
