import { useProps } from '../../utils/CartContext';
import { FaCartPlus } from 'react-icons/fa';
import { RxCheckCircled } from 'react-icons/rx';
import { BiCut } from 'react-icons/bi';
import { toast } from 'react-toastify';

const ModelCard = ({ model }) => {
  const { carts, addToCart, removeFromCart } = useProps();

  const isSubscribed = carts.some((item) => item.id === model.id);

  return (
    <div className='relative max-w-80 w-full'>
      {/* Tag Ribbon */}
      <div className='absolute right-3 top-8 flex justify-center'>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
            model.tagType === 'new' || model.tagType === 'popular'
              ? 'bg-linear-to-r from-orange-400 to-pink-500'
              : model.tagType === 'best seller'
                ? 'bg-linear-to-r from-blue-500 to-indigo-600'
                : 'bg-linear-to-r from-gray-500 to-gray-600'
          }`}
        >
          {model.tag}
        </span>
      </div>

      {/* Card Body */}
      <div className='mt-4 h-full rounded-lg border border-gray-800/10 bg-white shadow-lg flex flex-col'>
        <div className='flex justify-start mt-8 ml-8'>
          <div className='h-14 w-14 rounded-full border-2 border-[#4e566010] shadow-md flex items-center justify-center text-xl'>
            {model.icon}
          </div>
        </div>

        {/* Header / Title */}
        <div className='border-b border-gray-200 p-6'>
          <h3 className='text-xl font-bold text-gray-900'>{model.name}</h3>
          <p className='text-sm text-gray-500'>{model.description}</p>
        </div>

        {/* Price & Features */}
        <div className='p-6 grow'>
          <div className='mb-4 flex items-baseline'>
            <span className='text-3xl font-bold text-gray-900'>
              ${model.price}
            </span>
            <span className='ml-1 text-sm text-gray-500'>/{model.period}</span>
          </div>

          {/* Features List */}
          <ul className='space-y-1 text-gray-500'>
            {model.features.map((feature, index) => (
              <li key={index} className='flex items-center gap-2'>
                <RxCheckCircled className='h-4 w-4 text-blue-600' />
                <span className='text-sm'>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button Section */}
        <div className='border-t border-gray-200 p-6'>
          <button
            onClick={() => {
              if (isSubscribed) {
                removeFromCart(model.id);
                toast.info(`${model.name} removed from cart`);
              } else {
                addToCart(model);
                toast.info(`${model.name} added to cart`);
              }
            }}
            className={`w-full rounded-full px-4 py-2 text-sm font-semibold bg-linear-to-r from-blue-500 to-purple-600 text-white transition-opacity hover:opacity-90 cursor-pointer ${
              isSubscribed
                ? 'bg-gray-200 text-gray-700'
                : 'bg-gray-800 text-white'
            }`}
          >
            {isSubscribed ? (
              <span className='flex items-center justify-center gap-2'>
                <BiCut size={16} />
                Remove from Cart
              </span>
            ) : (
              <span className='flex items-center justify-center gap-2'>
                <FaCartPlus size={16} />
                Buy Now
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
