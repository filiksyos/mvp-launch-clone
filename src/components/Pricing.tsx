
'use client';

import { useState, useEffect } from 'react';

const Pricing = () => {
  const [tier, setTier] = useState('free');

  useEffect(() => {
    const storedTier = localStorage.getItem('tier');
    if (storedTier) {
      setTier(storedTier);
    }
  }, []);

  const handleSelectTier = (selectedTier: string) => {
    setTier(selectedTier);
    localStorage.setItem('tier', selectedTier);
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className={`p-6 rounded-lg shadow-md ${tier === 'free' ? 'border-2 border-blue-500' : ''}`}>
          <h3 className="text-xl font-bold mb-4">Free</h3>
          <p className="text-3xl font-bold mb-4">$0</p>
          <button 
            onClick={() => handleSelectTier('free')}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Select
          </button>
        </div>
        <div className={`p-6 rounded-lg shadow-md ${tier === 'pro' ? 'border-2 border-blue-500' : ''}`}>
          <h3 className="text-xl font-bold mb-4">Pro</h3>
          <p className="text-3xl font-bold mb-4">$10</p>
          <button 
            onClick={() => handleSelectTier('pro')}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Select
          </button>
        </div>
        <div className={`p-6 rounded-lg shadow-md ${tier === 'enterprise' ? 'border-2 border-blue-500' : ''}`}>
          <h3 className="text-xl font-bold mb-4">Enterprise</h3>
          <p className="text-3xl font-bold mb-4">$25</p>
          <button 
            onClick={() => handleSelectTier('enterprise')}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Select
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
