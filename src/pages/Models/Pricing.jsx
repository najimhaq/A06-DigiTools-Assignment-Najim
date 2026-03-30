function PricingPlans({ plans }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-8'>
      {plans.map((plan) => (
        <div
          key={plan.id}
          className='rounded-lg shadow-lg overflow-hidden 
                     bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6'
        >
          {/* Header */}
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-xl font-bold'>{plan.name}</h3>
            <span
              className={`badge badge-sm ${
                plan.tagType === 'most_popular'
                  ? 'badge-warning'
                  : plan.tagType === 'popular'
                    ? 'badge-primary'
                    : plan.tagType === 'regular'
                      ? 'badge-ghost'
                      : plan.tagType === 'premium'
                        ? 'badge-success'
                        : 'badge-neutral'
              }`}
            >
              {plan.tag}
            </span>
          </div>

          {/* Description */}
          <p className='mb-4'>{plan.description}</p>

          {/* Price */}
          <h2 className='text-3xl font-extrabold mb-4'>
            ${plan.price}/{plan.period}
          </h2>

          {/* Features */}
          <ul className='mb-6 space-y-2'>
            {plan.features.map((feature, index) => (
              <li key={index} className='flex items-center'>
                <span className='mr-2'>✔️</span> {feature}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className='w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100'>
            Choose {plan.name}
          </button>
        </div>
      ))}
    </div>
  );
}
