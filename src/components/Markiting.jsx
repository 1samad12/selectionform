import React, { useState } from 'react';
import Navbar from '../pages/Navbar';
import { useNavigate } from 'react-router-dom';

function Marketing() {
  const navigate = useNavigate();
  const [selectedBudget, setSelectedBudget] = useState('');

  const handleClick = (budget) => {
    setSelectedBudget(budget);
    localStorage.setItem('selectedBudget', budget); // Save selected budget to localStorage
    navigate('/details'); // Navigate to details page
  };

  return (
    <div className='marketing bg-[#F9FAFB] min-h-screen w-full'>
      <Navbar />
      <div className='text text-center pt-10 text-3xl font-bold'>
        <h2 className='mt-4'>What is your monthly digital</h2>
        <h2 className='mb-8'>marketing budget?</h2>
      </div>
      <div className='input flex flex-col justify-center items-center font-bold'>
        <p className={`text-2xl font-bold border-2 border-gray-300 rounded-lg m-1 p-5 w-full max-w-md text-center cursor-pointer bg-white ${selectedBudget === '$1.00/mo' ? 'bg-blue-200' : ''}`} onClick={() => handleClick('$1.00/mo')}>
          $1.00/mo
        </p>
        <p className={`text-2xl font-bold border-2 border-gray-300 rounded-lg m-1 p-5 w-full max-w-md text-center cursor-pointer bg-white ${selectedBudget === '$1,000 - $2,000' ? 'bg-blue-200' : ''}`} onClick={() => handleClick('$1,000 - $2,000')}>
          $1,000 - $2,000
        </p>
        <p className={`text-2xl font-bold border-2 border-gray-300 rounded-lg m-1 p-5 w-full max-w-md text-center cursor-pointer bg-white ${selectedBudget === '$2,000 - $5,000' ? 'bg-blue-200' : ''}`} onClick={() => handleClick('$2,000 - $5,000')}>
          $2,000 - $5,000
        </p>
        <p className={`text-2xl font-bold border-2 border-gray-300 rounded-lg m-1 p-5 w-full max-w-md text-center cursor-pointer bg-white ${selectedBudget === '$5,000 - $10,000' ? 'bg-blue-200' : ''}`} onClick={() => handleClick('$5,000 - $10,000')}>
          $5,000 - $10,000
        </p>
        <p className={`text-2xl font-bold border-2 border-gray-300 rounded-lg m-1 p-5 w-full max-w-md text-center cursor-pointer bg-white ${selectedBudget === '$10,000 - $25,000' ? 'bg-blue-200' : ''}`} onClick={() => handleClick('$10,000 - $25,000')}>
          $10,000 - $25,000
        </p>
        <p className={`text-2xl font-bold border-2 border-gray-300 rounded-lg m-1 p-5 w-full max-w-md text-center cursor-pointer bg-white ${selectedBudget === '$25,000 +' ? 'bg-blue-200' : ''}`} onClick={() => handleClick('$25,000 +')}>
          $25,000 +
        </p>
      </div>
    </div>
  );
}

export default Marketing;
