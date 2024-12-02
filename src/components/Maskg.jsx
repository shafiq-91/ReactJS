import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Maskg() {
    return (
        <div className="flex items-center justify-center p-4 sm:p-8 lg:p-16">
            <div className="rounded-3xl flex flex-col items-center justify-center bg-[url('/img/mg.svg')] bg-cover bg-no-repeat p-10 sm:p-14 md:p-20 lg:p-28 w-full max-w-5xl">
                <div className="text-center">
                    <h3 className="text-[24px] sm:text-[30px] md:text-[40px] font-bold">
                        Train your aiDR on your...
                    </h3>
                    <h4 className="italic font-workSans text-[24px] sm:text-[30px] md:text-[40px] py-2 text-[#0FF1F6]">
                        preferred email st|
                    </h4>
                    <div className="w-full sm:w-3/4 lg:w-2/4 py-4 mx-auto">
                        <p className="opacity-60 text-[16px] sm:text-[18px] md:text-[22px]">
                            You’re in control. Train your aiDR on elements of your Marketing strategy.
                        </p>
                    </div>
                    <div className="text-[#14BCB2] font-Montserrat flex flex-col sm:flex-row gap-4 sm:gap-10 text-[16px] sm:text-[18px] md:text-[20px]">
                        <div>
                            <p className="py-3 flex items-center gap-2">
                                <CheckCircleOutlineIcon /> Quick to ramp
                            </p>
                            <p className="py-3 flex items-center gap-2">
                                <CheckCircleOutlineIcon /> Easy to optimize
                            </p>
                        </div>
                        <div>
                            <p className="py-3 flex items-center gap-2">
                                <CheckCircleOutlineIcon /> Quick to scale up
                            </p>
                            <p className="py-3 flex items-center gap-2">
                                <CheckCircleOutlineIcon /> Works with all your existing tools
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Maskg;
