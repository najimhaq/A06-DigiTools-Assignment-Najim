import './App.css';
import { Suspense, useState } from 'react';
import ErrorBoundaryWrapper from './hooks/ErrorBoundaryWrapper/ErrorBoundaryWrapper';
import NavBar from './pages/NavBar/NavBar';
import Banner from './pages/Banner/Banner';
import Footer from './pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Models from './pages/Models/Models';
import { CartProvider, useProps } from './utils/CartContext';
import DigitalToolsTitle from './pages/DigitalToolsTitle';
import CartDrawer from './pages/cart/CartDrawer';
import Workflow from './pages/workflow/Workflow';
import ThreeSteps from './pages/ThreeSteps';
import PricingCard from './pricingCard/PricingCard';

const getModels = async () => {
  const res = await fetch('/models.json');
  return res.json();
};
const modelPromise = getModels();
const AppContent = () => {
  const { carts } = useProps();
  const [activeTab, setActiveTab] = useState('model');
  return (
    <>
      <NavBar />
      <Banner />
      <DigitalToolsTitle />
      <div className='tabs tabs-box justify-center bg-transparent mb-6'>
        <input
          type='radio'
          name='my_tabs_1'
          className={`tab rounded-full w-40 mr-5 transition-all duration-300 ease-in-out ${
            activeTab === 'model'
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          aria-label='Models'
          onClick={() => setActiveTab('model')}
          defaultChecked
        />
        <input
          type='radio'
          name='my_tabs_1'
          className={`tab rounded-full w-40 transition-all duration-300 ease-in-out ${
            activeTab === 'cart'
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
              : 'bg-gray-200 text-gray-700 '
          }`}
          aria-label={`Cart(${carts.length})`}
          onClick={() => setActiveTab('cart')}
        />
      </div>

      {activeTab === 'model' && <Models modelPromise={modelPromise} />}

      {activeTab === 'cart' && <CartDrawer />}
      {activeTab !== 'cart' && (
        <>
          <ThreeSteps />
          <PricingCard />
          <Workflow />
          <Footer />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <div className='container mx-auto'>
      <CartProvider>
        <ErrorBoundaryWrapper>
          <Suspense
            fallback={
              <div className='flex h-screen flex-col items-center justify-center space-y-6'>
                <div className='h-20 w-20 animate-spin rounded-full border-4 border-blue-500 border-t-transparent'></div>
                <div className='text-center'>
                  <p className='text-xl font-semibold text-gray-700'>
                    Loading Players...
                  </p>
                  <p className='text-gray-500'>Please wait a moment ✨</p>
                </div>
              </div>
            }
          >
            <AppContent />
          </Suspense>
        </ErrorBoundaryWrapper>
      </CartProvider>
      <ToastContainer position='top-right' autoClose={2000} />
    </div>
  );
};

export default App;
