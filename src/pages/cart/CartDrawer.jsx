import React from 'react';
import { useProps } from '../../utils/CartContext';
import { IoMdRemoveCircleOutline } from 'react-icons/io';

const CartDrawer = ({ cartItems, onRemove, onCheckout }) => {
  const { carts, setCarts } = useProps();

  // মোট দাম হিসাব করা
  const totalPrice = carts
    .reduce((sum, item) => sum + item.price, 0)
    .toFixed(2);

  const handlePayment = () => {
    setCarts([]);
    if (onCheckout) onCheckout();
  };

  const handleRemove = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    if (onRemove) onRemove(item);
  };

  return (
    <div className='max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6'>
      {/* Header */}
      <div className='p-6 border-b border-gray-100'>
        <h2 className='text-2xl font-bold text-gray-900'>Your Cart</h2>
        <p className='text-gray-600 mt-1'>
          {carts.length} item{carts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Cart Items */}
      <div className='p-6 space-y-4 max-h-96 overflow-y-auto'>
        {carts.length === 0 ? (
          <div className='text-center py-12'>
            <div className='h-20 w-20 mx-auto mb-4 rounded-xl bg-gray-100 flex items-center justify-center text-3xl'>
              🛒
            </div>
            <p className='text-gray-500 font-medium text-lg'>
              No items in cart
            </p>
          </div>
        ) : (
          <div className='space-y-4 mb-6'>
            {carts.map((item) => (
              <div
                key={item.id}
                className='flex justify-between items-center border-b border-gray-200 pb-3'
              >
                <div className='flex justify-between items-center w-full'>
                  <div className='flex justify-center items-center gap-4'>
                    <span className='text-2xl'>{item.icon}</span>
                    <div className='flex flex-col'>
                      <span className='text-gray-700 font-medium'>
                        {item.name}
                      </span>
                      <span className='text-gray-900 font-semibold'>
                        ${item.price}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item)}
                    className='text-red-500 hover:text-red-700 text-sm font-medium transition-colors'
                  >
                    <div className='flex gap-1 justify-center items-center cursor-pointer'>
                      <IoMdRemoveCircleOutline />
                      <span>Remove</span>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total Section */}
      <div className='flex justify-between items-center pt-4 border-t border-gray-300 mb-6'>
        <span className='text-lg font-bold text-gray-800'>Total:</span>
        <span className='text-xl font-bold text-gray-900'>${totalPrice}</span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handlePayment}
        type='button'
        className='w-full px-8 py-3 text-lg font-semibold rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white cursor-pointer hover:from-purple-500 hover:to-blue-500 shadow-md transition-all duration-200 active:scale-95'
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartDrawer;
