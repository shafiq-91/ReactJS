import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Maskg() {
    return (
        <section className='w-full flex items-center my-4 justify-center'>
            <div className="max-w-[1344px] w-full p-6 sm:p-10 bg-[url('/img/mg.svg')] bg-[#07292f] bg-left-bottom bg-no-repeat rounded-lg flex flex-col items-center text-center sm:text-left">
                <h1 className='text-2xl sm:text-3xl md:text-4xl p-2'>
                    Train your aiDR on your...
                </h1>
                <h1 className='text-2xl sm:text-3xl md:text-4xl text-[#0FF1F6] italic font-mono'>
                    prefered email st|
                </h1>
                <p className='text-base sm:text-lg md:text-xl w-full sm:w-[400px] py-4'>
                    You’re in control. Train your aiDR on elements of your Marketing strategy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center sm:justify-items-start text-lg text-[#14BCB2]">
                    <p className="flex items-center gap-2">
                        <CheckCircleOutlineIcon /> Quick to ramp
                    </p>
                    <p className="flex items-center gap-2">
                        <CheckCircleOutlineIcon /> Easy to optimize
                    </p>
                    <p className="flex items-center gap-2">
                        <CheckCircleOutlineIcon /> Quick to scale up
                    </p>
                    <p className="flex items-center gap-2">
                        <CheckCircleOutlineIcon /> Works with all your existing tools
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Maskg;
