import PlanPrice from "./PlanPrice";


const PricingCard = () => {
  return (
    <>
      <div className='text-center mb-10'>
        <h1 className='font-black text-5xl md:text-6xl mb-6 tracking-tight text-gray-900'>
          Simple, Transparent Pricing
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <PlanPrice />
    </>
  );
};

export default PricingCard;
