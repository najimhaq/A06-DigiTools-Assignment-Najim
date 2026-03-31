import { BsBox2 } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { MdOutlineRocketLaunch } from 'react-icons/md';

const ThreeSteps = () => {
  const steps = [
    {
      num: '01',
      icon: FiUser,
      title: 'Create Account',
      desc: 'Sign up for free in seconds. No credit card required to get started.',
    },
    {
      num: '02',
      icon: BsBox2,
      title: 'Choose Products',
      desc: 'Browse our catalog and select the tools that fit your needs.',
    },
    {
      num: '03',
      icon: MdOutlineRocketLaunch,
      title: 'Start Creating',
      desc: 'Download and start using your premium tools immediately.',
    },
  ];

  return (
    <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
      <div className='text-center mb-20'>
        <h1 className='font-black text-5xl md:text-6xl mb-6 tracking-tight text-gray-900'>
          Get Started in 3 Steps
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className='max-w-6xl mx-auto px-4 mb-20'>
        <div className='grid md:grid-cols-3 gap-8 items-center'>
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`group relative p-8 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white ${index !== 2 ? 'md:after:content-[""] md:after:absolute md:after:top-1/2 md:after:right-0 md:after:-mr-6 md:after:w-12 md:after:h-1 md:after:bg-gradient-to-r md:after:from-blue-500 md:after:to-purple-600' : ''}`}
            >
              <div className='absolute -top-4 left-1/2 -ml-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold shadow-lg'>
                {step.num}
              </div>
              <div className='text-center mt-8'>
                <div className='w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 shadow-lg'>
                  <step.icon className='w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  {step.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeSteps;
