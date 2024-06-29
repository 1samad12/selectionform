import React, { useState, useEffect } from 'react';
import Navbar from '../pages/Navbar';
import { CgLock } from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Details() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    additionalInfo: '',
  });
  const navigate = useNavigate();
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setFormData(storedData);
    } else {
      navigate('/details');
    }
  }, [navigate]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.additionalInfo) {
      toast.error('Please fill all the required fields!');
      return;
    }
    
    localStorage.setItem('formData', JSON.stringify(formData));
    toast.success('Details saved successfully!');
    navigate('/marketing');
    setFormData({
      name: '',
      email: '',
      phone: '',
      additionalInfo: '',
    });
  };
  

  return (
    <div className='bg-[#F9FAFB] min-h-screen w-full'>
      <Navbar />
      <div className='max-w-2xl mx-auto p-6'>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4 text-center'>Details</h2>
          <p className='mb-2 text-center'>We’re thrilled at the opportunity to help you grow your business online.</p>
          <p className='text-center'>Please let us know the best way to reach you.</p>
        </div>
        <div className='space-y-4'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
            <input 
              id='name'
              name='name'
              type='text' 
              className='mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              onChange={handleChange}
              value={formData.name}
              aria-label='Your name'
            />
          </div>
          <div className='flex justify-between'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
              <input 
                id='email'
                name='email'
                type='email' 
                className='mt-1 block w-[300px] px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                onChange={handleChange}
                value={formData.email}
                aria-label='Your email address'
              />
            </div>
            <div>
              <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>Phone Number</label>
              <input 
                id='phone'
                name='phone'
                type='tel' 
                className='mt-1 block w-[300px] px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                onChange={handleChange}
                value={formData.phone}
                aria-label='Your phone number'
              />
            </div>
          </div>
          <div>
            <label htmlFor='additionalInfo' className='block text-sm font-medium text-gray-700'>Anything else you’d like to share?</label>
            <textarea
              id='additionalInfo'
              name='additionalInfo'
              className='mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              onChange={handleChange}
              value={formData.additionalInfo}
              aria-label='Additional information'
            ></textarea>
          </div>
          <div className='flex justify-center'>
            <button className='bg-[#019F44] text-white py-2 px-[70px] cursor-pointer' onClick={handleFormSubmit}>Send Request</button>
          </div>
          <div className='flex justify-center items-center'>
            <p className='flex items-center gap-4'>
              <CgLock /> We promise never to share your information or spam your inbox
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Details;
