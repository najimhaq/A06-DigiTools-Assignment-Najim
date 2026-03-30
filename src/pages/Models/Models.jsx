import { use } from 'react';

import { useProps } from '../../utils/CartContext';
import ModelCard from './ModelCard';

const Models = ({ modelPromise }) => {
  const modelsData = use(modelPromise);

  if (!modelsData || !Array.isArray(modelsData) || modelsData.length === 0) {
    return (
      <div className='py-12 text-center'>
        <p className='text-xl text-gray-500'>No model data available 😔</p>
      </div>
    );
  }

  const {  carts, setCarts } = useProps();

  const filteredModel = modelsData.filter((model) => {
    const matchedModel = model.title
      ?.toLowerCase() 
      ?.includes(search.toLowerCase());
    return matchedModel || false;
  });
  return (
    <>
      <div className='space-y-10'>
        {/* Top Bar */}
        <div className='flex justify-center items-center gap-6 flex-wrap'>
          {/* <button
            type='button'
            className='text-white bg-linear-to-r from-red-500 to-pink-500 rounded-full shadow-md hover:from-red-600 hover:to-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium text-sm px-6 py-2 text-center leading-5 lg:w-40 cursor-pointer transition-all'
          >
            Models
          </button>  */}

          {/* <button className='rounded-full bg-blue-600 text-white px-6 py-2 text-sm font-medium shadow-md hover:bg-blue-700 transition lg:w-40'>
            Cart(0)
          </button> */}

         
          {/* Search */}
          {/* <div className='relative w-full max-w-xs'>
            <FaSearch className='pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm text-zinc-400' />
            <input
              type='text'
              placeholder='Search...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='h-11 w-full rounded-full border border-gray-300 bg-white pr-4 pl-11 text-sm shadow-sm transition-all duration-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-600 focus:outline-none'
            />
          </div> */}
        </div>

       
        {/* models maping */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb'>
          {filteredModel.map((model, index) => (
            <ModelCard
              key={model.id || `model-${index}`}
              model={model}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
        <div>
          <p className='text-center text-sm text-zinc-500 mb-10'>
            All models are available under one powerful subscription • Cancel
            anytime
          </p>
        </div>
      </div>
    </>
  );
};

export default Models;
