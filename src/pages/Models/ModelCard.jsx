import { useProps } from '../../utils/CartContext';
import { FaCartPlus } from 'react-icons/fa';
import { RxCheckCircled } from 'react-icons/rx';
import { BiCut } from 'react-icons/bi';
import { toast } from 'react-toastify';

const ModelCard = ({ model }) => {
  const { carts, addToCart, removeFromCart } = useProps();
  const isSubscribed = carts.some((item) => item.id === model.id);

  return (
    <div className='relative w-full sm:max-w-md mx-auto'>
      {/* Tag Ribbon */}
      <div className='absolute top-4 right-4'>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
            model.tagType === 'new' || model.tagType === 'popular'
              ? 'bg-gradient-to-r from-orange-400 to-pink-500'
              : model.tagType === 'best seller'
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600'
                : 'bg-gradient-to-r from-gray-500 to-gray-600'
          }`}
        >
          {model.tag}
        </span>
      </div>

      {/* Card Body */}
      <div className='mt-6 flex flex-col justify-between rounded-lg border border-gray-200 bg-white shadow-lg'>
        {/* Icon */}
        <div className='flex justify-start mt-6 ml-6'>
          <div className='h-14 w-14 rounded-full border-2 border-gray-200 shadow-md flex items-center justify-center text-xl'>
            {model.icon}
          </div>
        </div>

        {/* Header */}
        <div className='border-b border-gray-200 p-6'>
          <h3 className='text-xl font-bold text-gray-900'>{model.name}</h3>
          <p className='text-sm text-gray-500'>{model.description}</p>
        </div>

        {/* Price & Features */}
        <div className='p-6 flex-1'>
          <div className='mb-4 flex items-baseline'>
            <span className='text-3xl font-bold text-gray-900'>
              ${model.price}
            </span>
            <span className='ml-1 text-sm text-gray-500'>/{model.period}</span>
          </div>

          <ul className='space-y-2 text-gray-600'>
            {model.features.map((feature, index) => (
              <li key={index} className='flex items-center gap-2'>
                <RxCheckCircled className='h-4 w-4 text-blue-600' />
                <span className='text-sm'>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
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
            className={`w-full rounded-full px-4 sm:px-6 py-2 text-sm font-semibold transition-all cursor-pointer ${
              isSubscribed
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90'
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
