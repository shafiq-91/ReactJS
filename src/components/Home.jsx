import React from 'react';
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import Features from './Ctrl';
import Maskg from './Maskg';
import Testimonials from './Testimonials';
import Effort from './Effort';
import Started from './Started';

function Home() {
    return (
        <>
            <div className="bg-[url('/img/hero.svg')] p-10 md:p-28 bg-right-bottom bg-cover h-screen flex flex-col justify-center items-start space-y-6 sm:space-y-4 text-white">
                <span className='text-[#0FF1F6] text-[20px] sm:text-[24px] hover:text-white transition duration-500 ease-in-out transform hover:scale-105'>
                    AI SDRs (aiDRs)
                </span>
                <h1 className='text-3xl sm:text-4xl font-bold'>
                    <span className='font-bold hover:text-[#0FF1F6] hover:underline transition duration-500 ease-in-out transform hover:scale-105'>
                        More 
                    </span>  
                    <span className='italic text-4xl sm:text-5xl hover:text-[#0FF1F6] transition duration-500 ease-in-out'>
                         leads
                    </span>
                    <span className='font-bold text-4xl sm:text-5xl'>,</span>
                </h1>
                <h1 className='text-3xl sm:text-4xl font-bold'>
                    <span className="font-bold text-4xl sm:text-5xl hover:text-[#0FF1F6] transition duration-500 ease-in-out transform hover:scale-105">
                        less 
                    </span>
                    <span className="italic text-4xl sm:text-5xl hover:text-[#0FF1F6] transition duration-500 ease-in-out">
                        people
                    </span>
                    <span className="font-bold text-4xl sm:text-5xl">.</span>
                </h1>
                <p className='text-lg w-full sm:w-96 text-[#cccccc81] hover:text-white opacity-80 hover:opacity-100 transition duration-500 ease-in-out'>
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
                        boxShadow: '0 4px 15px rgba(0, 255, 246, 0.4)',
                        transition: 'transform 0.3s, background-color 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            backgroundColor: '#02d6e1',
                            transform: 'scale(1.1)',
                            boxShadow: '0 8px 20px rgba(0, 255, 246, 0.6)',
                        },
                    }}
                >
                    Sign Up for the Beta <LaunchIcon />
                </Button>
            </div>
            <div className="bg-[#07292F] p-8 flex flex-col items-center justify-center">
                <p className="text-[#0FF1F6] p-4 pt-0 text-[16px] uppercase hover:text-white transition duration-500 ease-in-out transform hover:scale-105">
                    our trusted partners
                </p>
                <div className='flex gap-5 flex-wrap justify-center'>
                    {['bh', 'clg', 'dbs', 'eel', 'amd'].map((logo) => (
                        <img
                            key={logo}
                            src={`/img/${logo}.svg`}
                            alt={logo}
                            className="w-24 sm:w-32 md:w-40 lg:w-48 transition duration-500 ease-in-out transform hover:scale-110 hover:rotate-3 hover:opacity-90 hover:shadow-xl"
                        />
                    ))}
                </div>
            </div>
            <Features />
            <Maskg />
            <Testimonials />
            <Effort />
            <Started />
        </>
    );
}

export default Home;
