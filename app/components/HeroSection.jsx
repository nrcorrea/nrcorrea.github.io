import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section>
            <div classname="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className='text-black mb-4 text-4xl md:text-6xl font-extrabold'>Hero Section</h1>
                    <p className='text-black text-lg mb-6 lg:text-xl'>This is the hero section</p>
                    <div>
                        <button>Hire Me</button>
                        <button>Download Resume</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className='border-8 border-orange-950 rounded-full h-[250px] w-[250px] lg:w-[400] lg:h-[400]relative overflow-hidden'>
                        <Image src="/images/abmeimage.jpg" alt="image of Nicholas" width={500} height={500}
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;