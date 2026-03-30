import { useProps } from '../../utils/CartContext';
import { MdOutlineUnsubscribe } from 'react-icons/md';
import { FaCartPlus } from 'react-icons/fa';
import { RxCheckCircled } from 'react-icons/rx'; 

const ModelCard = ({ model }) => {
  const { carts, addToCart, removeFromCart } = useProps();

  const isSubscribed = carts.some((item) => item.id === model.id);

  return (
    <div className='relative max-w-80 w-full'>
      {/* Tag Ribbon */}
      <div className='absolute inset-x-0 top-1 flex justify-center'>
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
      <div className='mt-4 h-full rounded-lg border-2 border-gray-800 bg-white shadow-lg flex flex-col'>
        {/* Header / Title */}
        <div className='border-b border-gray-200 p-6'>
          <h3 className='text-xl font-bold text-gray-900'>{model.name}</h3>
          <p className='text-sm text-gray-500'>{model.description}</p>
        </div>

        {/* Price & Features – যেটা পর্যন্ত stretch হবে */}
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
              } else {
                addToCart(model);
              }
            }}
            className={`w-full rounded-full px-4 py-2 text-sm font-semibold bg-linear-to-r from-blue-500 to-purple-600 text-white transition-opacity hover:opacity-90 ${
              isSubscribed
                ? 'bg-gray-200 text-gray-700'
                : 'bg-gray-800 text-red-500'
            }`}
          >
            {isSubscribed ? (
              <span className='flex items-center justify-center gap-2'>
                <MdOutlineUnsubscribe size={16} />
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
