
import { useProps } from '../../utils/CartContext';
import { toast } from 'react-toastify';
import { MdOutlineUnsubscribe } from 'react-icons/md';
import { FaCartPlus } from 'react-icons/fa';

const ModelCard = ({ model }) => {
  // console.log(carts)
  const { carts, addToCart, removeFromCart } = useProps();

  const isSubscribed = carts.some((item) => item.id === model.id);
  const handleSubscriptionBtn = () => {
    if (isSubscribed) {
      removeFromCart(model.id);
      toast.info(`${model.title} removed`);
    } else {
      addToCart(model);
      toast.success(`${model.title} added`);
    }
  };

  return (
    <article className='flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-3xl'>
      {/* Image Container */}
      <div className='relative h-56 flex items-center justify-center bg-gray-100'>
        <img
          src={model.image}
          alt={model.title}
          className='h-40 w-40 object-cover rounded-lg transition-transform duration-300 hover:scale-110'
          onError={(e) => {
            e.target.src =
              'https://via.placeholder.com/300x200/ff6b6b/ffffff?text=AI+Model';
          }}
        />
      </div>

      {/* Content */}
      <div className='flex flex-col flex-1 p-5 space-y-3'>
        <h2 className='text-lg font-bold text-gray-900 hover:text-red-500 transition-colors'>
          {model.title}
        </h2>
        <p className='text-sm text-gray-600'>{model.description}</p>

        {/* Price */}
        <div className='text-xl font-semibold text-red-600'>
          ${model.price}/month
        </div>

        {/* Button */}
        <button
          onClick={handleSubscriptionBtn}
          type='button'
          className={`mt-auto w-full font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-200 shadow-md active:scale-95 flex items-center justify-center gap-2 ${
            isSubscribed
              ? 'bg-gray-100 border-2 border-gray-400 text-gray-700 hover:bg-gray-200'
              : 'bg-linear-to-r from-red-400 via-red-500 to-red-600 hover:from-red-500 hover:to-red-700 text-white'
          }`}
        >
          {isSubscribed ? (
            <>
              <MdOutlineUnsubscribe />
              Unsubscribe
            </>
          ) : (
            <>
              <FaCartPlus />
              Subscribe Now
            </>
          )}
        </button>
      </div>
    </article>
  );
};

export default ModelCard;
