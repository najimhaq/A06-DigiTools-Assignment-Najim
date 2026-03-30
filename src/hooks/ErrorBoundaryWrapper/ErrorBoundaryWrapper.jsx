import { ErrorBoundary } from 'react-error-boundary';

// Fallback UI with your design
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className='flex h-screen flex-col items-center justify-center space-y-6'>
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-red-600 mb-4'>
          Something went wrong!
        </h2>
        <p className='text-gray-700 mb-4'>
          {error?.message || 'Failed to load players data'}
        </p>
        <button
          onClick={resetErrorBoundary}
          className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

// Error boundary wrapper
function ErrorBoundaryWrapper({ children }) {
  const handleError = (error, errorInfo) => {
    console.error('Error caught by boundary:', error, errorInfo);
  };

  const handleReset = () => {
    // Optional: reset any state here if needed
    console.log('Error boundary reset');
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={handleError}
      onReset={handleReset}
    >
      {children}
    </ErrorBoundary>
  );
}

export default ErrorBoundaryWrapper;
