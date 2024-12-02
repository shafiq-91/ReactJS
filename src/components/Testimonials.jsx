import React, { useState } from 'react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

function Testimonials() {
    const testimonials = [
        {
            quote: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            name: "John Doe",
            position: "Chief Strategy Officer",
            company: "Company",
            image: "/img/quotes.svg"
        },
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada orci at magna volutpat.",
            name: "Jane Smith",
            position: "CEO",
            company: "TechCorp",
            image: "/img/quotes.svg"
        },
        {
            quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            name: "Sarah Lee",
            position: "Product Manager",
            company: "InnovateX",
            image: "/img/quotes.svg"
        },
        {
            quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
            name: "David Brown",
            position: "Lead Developer",
            company: "CodeLabs",
            image: "/img/quotes.svg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const transitionStyle = {
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: 'transform 0.5s ease-in-out',
    };

    return (
        <div className="flex flex-col items-center text-center px-4">
            <div className="relative w-full max-w-5xl overflow-hidden">
                <div className="flex" style={transitionStyle}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex-shrink-0 w-full px-4">
                            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                                {/* Left Navigation Arrow */}
                                <button
                                    aria-label="Previous"
                                    onClick={handlePrev}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg text-[#ffffff9c] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12 hover:text-[#0FF1F6] bg-[#96ACAF33] hidden md:block"
                                >
                                    <WestIcon />
                                </button>

                                <div className="flex flex-col justify-center items-center max-w-md">
                                    <div className="bg-[#183A40] rounded-full flex items-center justify-center w-16 h-16 cursor-pointer transition-all duration-500 ease-in-out hover:rotate-180 hover:scale-110">
                                        <img src={testimonial.image} alt="Quote Icon" className="w-8 h-8" />
                                    </div>
                                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-md py-6 leading-relaxed transition-transform duration-300 ease-in-out hover:scale-105 hover:text-[#14BCB2]">
                                        {testimonial.quote}
                                    </p>
                                    <p className="text-[#0FF1F6] text-base md:text-lg font-bold transition-colors duration-300 ease-in-out hover:text-[#96ACAF]">{testimonial.name}</p>
                                    <p className="text-[#96ACAF] text-sm md:text-base transition-transform duration-300 ease-in-out hover:scale-110">
                                        {testimonial.position} @ {testimonial.company}
                                    </p>
                                </div>

                                {/* Right Navigation Arrow */}
                                <button
                                    aria-label="Next"
                                    onClick={handleNext}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg text-[#0FF1F6] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12 hover:text-[#ffffff9c] bg-[#96ACAF33] hidden md:block"
                                >
                                    <EastIcon />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center space-x-3 mt-5">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        aria-label={`Page ${index + 1}`}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-transform duration-300 ease-in-out hover:scale-125 ${currentIndex === index ? 'bg-[#0FF1F6]' : 'bg-[#96ACAF33]'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
