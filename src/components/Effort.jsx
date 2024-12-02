import React from 'react'

function Effort() {
    return (
        <section className='w-full flex items-center my-4 justify-center'>
            <div className="max-w-[1344px] w-full max-h-[564px] h-full p-6 sm:p-10 bg-[url('/img/mgc.svg')] bg-[#07292f] bg-left-bottom bg-no-repeat rounded-2xl flex flex-col">
                <h1 className='text-[24px] sm:text-3xl md:text-4xl p-2 w-full sm:w-[15em]'>
                    Allocate effort where your reps make an inpact.
                </h1>
                <h1 className='text-[24px] sm:text-3xl md:text-4xl text-[#0FF1F6] italic font-mono'>
                    Let us handle the rest.
                </h1>
                <p className='text-sm sm:text-lg md:text-xl w-full sm:w-[400px] py-4'>
                    Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
                </p>
                <div className="flex flex-wrap sm:flex-nowrap pt-8 gap-4 sm:gap-8">
                    <div className="w-full sm:w-auto sm:text-left">
                        <p className='text-[#0FF1F6] font-bold text-[32px] sm:text-[40px]'>32%</p>
                        <p className='text-sm sm:text-[20px] w-full sm:w-48'>
                            Improvement in Open Rates
                        </p>
                    </div>
                    <div className="w-full sm:w-auto sm:text-left">
                        <p className='text-[#0FF1F6] font-bold text-[32px] sm:text-[40px]'>75%</p>
                        <p className='text-sm sm:text-[20px] w-full sm:w-48'>
                            Improvement in Ramp Time
                        </p>
                    </div>
                    <div className="w-full sm:w-auto sm:text-left">
                        <p className='text-[#0FF1F6] font-bold text-[32px] sm:text-[40px]'>35%</p>
                        <p className='text-sm sm:text-[20px] w-full sm:w-48'>
                            Improvement in Meetings Booked
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Effort