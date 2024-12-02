import React from 'react';

function Features() {
    const cards = [
        {
            image: '/img/magic.svg',
            title: 'You’re in Control',
            description: 'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.',
        },
        {
            image: '/img/git.svg',
            title: 'Infinitely Scalable',
            description: 'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.',
        },
        {
            image: '/img/4line.svg',
            title: 'Incredibly Flexible',
            description: 'Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.',
        },
    ];

    return (
        <>
            <div className="p-4 flex flex-wrap items-center justify-center gap-5 h-auto">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="feature-card flex flex-col max-w-sm md:max-w-md transition-transform transform hover:scale-105 hover:shadow-lg"
                    >
                        <img src={card.image} alt={card.title} className="p-2 w-16 md:w-20 transition-all transform hover:scale-110" />
                        <h3 className="text-[20px] md:text-[24px] p-2 transition-colors hover:text-blue-500">{card.title}</h3>
                        <div className="p-2 w-full md:w-[350px]">
                            <p className="opacity-60 transition-opacity hover:opacity-80">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Features;
