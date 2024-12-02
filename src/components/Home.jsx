import React from 'react';
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import Features from './Ctrl';
import Maskg from './Maskg';
import Testimonials from './Testimonials';

function Home() {
    return (
        <>
            <div className="bg-[url('/img/hero.svg')] p-10 md:p-28 bg-right-bottom bg-cover h-screen flex flex-col justify-center items-start space-y-6 sm:space-y-4 text-white">
                <span className='text-[#0FF1F6] text-[20px] sm:text-[24px]'>AI SDRs (aiDRs)</span>
                <h1 className='text-3xl sm:text-4xl font-bold'>
                    <span className='font-bold'>More</span> <span className='italic text-4xl sm:text-5xl'>leads</span>
                    <span className='font-bold text-4xl sm:text-5xl'>,</span>
                </h1>
                <h1 className='text-3xl sm:text-4xl font-bold'>
                    <span className="font-bold text-4xl sm:text-5xl">less</span>
                    <span className="italic text-4xl sm:text-5xl"> people</span>
                    <span className="font-bold text-4xl sm:text-5xl">.</span>
                </h1>
                <p className='text-lg w-full sm:w-96 text-[#cccccc81]'>
                    Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.
                </p>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: '#0FF1F6',
                        fontWeight: 'bold',
                        color: '#002228',
                        borderRadius: '50px',
                        padding: '10px 30px',
                        fontSize: '18px',
                    }}
                >
                    Sign Up for the Beta  <LaunchIcon />
                </Button>
            </div>
            <div className="bg-[#07292F] p-8 flex flex-col items-center justify-center">
                <p className="text-[#0FF1F6] p-4 pt-0 text-[16px] uppercase">our trusted partners</p>
                <div className='flex gap-5 flex-wrap justify-center'>
                    <img src="/img/bh.svg" alt="" className="w-24 sm:w-32 md:w-40 lg:w-48" />
                    <img src="/img/clg.svg" alt="" className="w-24 sm:w-32 md:w-40 lg:w-48" />
                    <img src="/img/dbs.svg" alt="" className="w-24 sm:w-32 md:w-40 lg:w-48" />
                    <img src="/img/eel.svg" alt="" className="w-24 sm:w-32 md:w-40 lg:w-48" />
                    <img src="/img/amd.svg" alt="" className="w-24 sm:w-32 md:w-40 lg:w-48" />
                </div>
            </div>
            <Features />
            <Maskg />
            <Testimonials />
        </>
    );
}

export default Home;
