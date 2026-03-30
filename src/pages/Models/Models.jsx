import { use } from 'react';

import { useProps } from '../../utils/CartContext';
import ModelCard from './ModelCard';
import { FaSearch } from 'react-icons/fa';

const Models = ({ modelPromise }) => {
  const modelsData = use(modelPromise);
  

  if (!modelsData || !Array.isArray(modelsData) || modelsData.length === 0) {
    return (
      <div className='py-12 text-center'>
        <p className='text-xl text-gray-500'>No model data available 😔</p>
      </div>
    );
  }

  const { search, setSearch } = useProps();

  const filteredModel = modelsData.filter((model) => {
    const matchedModel = model.name
      ?.toLowerCase()
      ?.includes(search.toLowerCase());
    return matchedModel || false;
  });
  return (
    <>
      <div className='space-y-10'>
        {/* Top Bar */}
        <div className='flex justify-center items-center gap-6 flex-wrap'>
          {/* Search */}
          <div className='relative w-full max-w-xs'>
            <FaSearch className='pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm text-zinc-400' />
            <input
              type='text'
              placeholder='Search...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='h-11 w-full rounded-full border border-gray-300 bg-white pr-4 pl-11 text-sm shadow-sm transition-all duration-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-600 focus:outline-none'
            />
          </div>
        </div>

        {/* models maping */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-30'>
          {filteredModel.map((model, index) => (
            <ModelCard key={model.id || `model-${index}`} className="h-full" model={model} />
          ))}
        </div>
        
      </div>
    </>
  );
};

export default Models;
