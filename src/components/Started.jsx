import React from 'react'
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

function Started() {
    return (
        <div className='flex flex-col items-center justify-center p-16 max-h-[433px] h-full'>
            <p className='text-[#0FF1F6] text-[20px]'>GET STARTED</p>
            <h1 className='italic py-4 text-[36px]'>Embrace <span className='font-bold not-italic'>the new era of</span> outbound.</h1>
            <p className='opacity-60 text-[20px]'>Wizia lets you train, activate, and optimize aiDRs.</p>
            <p className='opacity-60 text-[20px]'>Take your outbound to new levels of performance and efficiency.</p>
            <Button
                variant='contained'
                sx={{
                    backgroundColor: '#0FF1F6',
                    fontWeight: 'bold',
                    color: '#002228',
                    borderRadius: '50px',
                    padding: '10px 30px',
                    fontSize: '18px',
                    margin:'25px'
                }}
            >
                Sign Up for the Beta  <LaunchIcon />
            </Button>
        </div>
    )
}

export default Started