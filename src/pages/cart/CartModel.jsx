import { useProps } from '../../utils/CartContext';

const CartModel = ({}) => {
  const { carts, setCarts } = useProps();
  // মোট দাম হিসাব করা
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([]);
  };
  const handleRemove = (item) => {
    
    const filterdeArray = carts.filter((c) => c.id !== item.id);
    setCarts(filterdeArray);
  };
  return (
    <div className='max-w-5xl mx-auto px-6'>
      {/* Heading */}
      <div className='text-center mb-10'>
        <h1 className='font-bold text-5xl mb-4 tracking-tight'>
          Your Cart Items
        </h1>
        <p className='text-xl text-zinc-500'>
          One subscription gives you access to all frontier AI models
        </p>
      </div>

      {/* Cart Items */}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10 place-items-center'>
        {carts.length === 0 ? (
          <div className='col-span-full text-center text-zinc-400 text-lg'>
            No items in your cart yet.
          </div>
        ) : (
          carts.map((item) => (
            <div
              key={item.id}
              className='flex flex-col items-center rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 p-5 w-72'
            >
              <img
                src={item.image}
                alt={item.title}
                className='h-24 w-24 object-cover rounded-lg mb-4'
                onError={(e) => {
                  e.target.src =
                    'https://via.placeholder.com/150x150/ff6b6b/ffffff?text=AI+Model';
                }}
              />
              <h2 className='text-lg font-bold text-gray-900 mb-2'>
                {item.title}
              </h2>
              <p className='text-sm text-gray-600 text-center mb-3'>
                {item.description}
              </p>
              <div className='text-red-600 font-semibold text-base mb-4'>
                ${item.price}/month
              </div>
              <button
                onClick={() => handleRemove(item)}
                type='button'
                className='w-full text-white bg-linear-to-r from-red-400 via-red-500 to-red-600 hover:from-red-500 hover:to-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-yellow-500 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-200 shadow-md active:scale-95'
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Total & Checkout */}
      {carts.length > 0 && (
        <div className='flex flex-col items-center space-y-4 mb-16'>
          <div className='text-2xl font-bold text-gray-800'>
            Total: <span className='text-red-600'>${totalPrice}</span>/month
          </div>
          <button
            onClick={handlePayment}
            type='button'
            className='px-8 py-3 text-lg font-semibold text-white bg-linear-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 rounded-lg shadow-md transition-all duration-200 active:scale-95'
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartModel;
