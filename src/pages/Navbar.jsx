import React from 'react';
import { GoArrowLeft, GoX } from 'react-icons/go';
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const hendalgoback = () => {
        navigate(-1);
    }

    const hendalexit = () => {
        navigate('/');
    }
    return (
        <>
            <div className='flex justify-between items-center bg-white h-12 w-full px-6'>
                <div className='flex items-center cursor-pointer gap-2' onClick={hendalgoback} >
                    <GoArrowLeft size={25} /> 
                    <h3 className='text-black text-lg font-semibold'>Go Back</h3>
                </div>
                <div className='flex items-center cursor-pointer gap-2' onClick={hendalexit}>
                    <h3 className='text-black text-lg font-semibold'>Exit</h3>
                    <GoX size={25} />
                </div>
            </div>
            <ProgressBar
                completed={40}
                isLabelVisible={false}
                bgColor="#019F44"
                height="6px"
            />
        </>
    );
}

export default Navbar;
