import React from 'react';
import Navbar from '../pages/Navbar';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/details');
    toast.success('Details saved successfully!');
  };

  return (
    <div className='bg-gray-50 min-h-screen'>
      <Navbar />
      <div className='flex justify-center items-center p-20'>
        <div className='w-20 h-20 bg-[#E5E7EB]'></div>
      </div>

      <div className='flex justify-center gap-2'>
        <h1 className='text-xl text-gray-700 text-center mt-4 font-semibold'>Your Request for a Proposal Has</h1>
      </div>

      <div className='flex justify-center gap-2'>
        <h1 className='text-xl text-gray-700 text-center font-semibold'>Been Submitted!</h1>
      </div>

      <div className='flex justify-center gap-2'>
        <p className='text-gray-600 text-center max-w-md mx-auto'>
          Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis gravida parturient urna tristique congue. Curabitur volutpat nulla convallis eget pellentesque. Luctus tellus eu ultrices egestas.
        </p>
      </div>

      <div className='flex justify-center mt-4'>
        <button className='bg-[#019F44] text-white py-2 px-10 cursor-pointer' onClick={() => navigate('/')}>Return Home</button>
      </div>
    </div>
  );
}

export default Home;
