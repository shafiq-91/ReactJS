import React from 'react';

function Effort() {
    return (
        <section className='w-full flex items-center my-4 justify-center'>
            <div className="max-w-[1344px] w-full max-h-[564px] h-full p-6 sm:p-10 bg-[url('/img/mgc.svg')] bg-[#07292f] bg-left-bottom bg-no-repeat rounded-2xl flex flex-col transition-all duration-500 ease-in-out hover:scale-105 hover:bg-[#0FF1F6] hover:bg-opacity-10">
                <h1 className='text-[24px] sm:text-3xl md:text-4xl p-2 w-full sm:w-[15em] transition-all duration-300 ease-in-out hover:text-[#0FF1F6] hover:tracking-wider'>
                    Allocate effort where your reps make an impact.
                </h1>
                <h1 className='text-[24px] sm:text-3xl md:text-4xl text-[#0FF1F6] italic font-mono transition-transform duration-300 ease-in-out hover:scale-110 hover:text-[#fff]'>
                    Let us handle the rest.
                </h1>
                <p className='text-sm sm:text-lg md:text-xl w-full sm:w-[400px] py-4 transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-[#0FF1F6]'>
                    Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
                </p>
                <div className="flex flex-wrap sm:flex-nowrap pt-8 gap-4 sm:gap-8">
                    <div className="w-full sm:w-auto sm:text-left transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-2">
                        <p className='text-[#0FF1F6] font-bold text-[32px] sm:text-[40px] transition-all duration-300 ease-in-out hover:text-[#fff]'>
                            32%
                        </p>
                        <p className='text-sm sm:text-[20px] w-full sm:w-48'>
                            Improvement in Open Rates
                        </p>
                    </div>
                    <div className="w-full sm:w-auto sm:text-left transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-2">
                        <p className='text-[#0FF1F6] font-bold text-[32px] sm:text-[40px] transition-all duration-300 ease-in-out hover:text-[#fff]'>
                            75%
                        </p>
                        <p className='text-sm sm:text-[20px] w-full sm:w-48'>
                            Improvement in Ramp Time
                        </p>
                    </div>
                    <div className="w-full sm:w-auto sm:text-left transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-2">
                        <p className='text-[#0FF1F6] font-bold text-[32px] sm:text-[40px] transition-all duration-300 ease-in-out hover:text-[#fff]'>
                            35%
                        </p>
                        <p className='text-sm sm:text-[20px] w-full sm:w-48'>
                            Improvement in Meetings Booked
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Effort;
