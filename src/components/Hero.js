import React from 'react'
import { useSpring, animated } from 'react-spring';
const Hero = () => {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1500 },
    });
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative mt-16'>
                {/* Overlay */}
                <animated.div
                    style={fadeIn} className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center gap-2'>
                    <h1 className='px-4 text-4xl sm:text-3xl md:text-3xl lg:text-3xl font-bold'>
                        Epicurean Eats
                        <span className='text-orange-500 text-gradient'>, Everyday Treats!</span></h1>
                    <h1 className='px-4 text-4xl sm:text-3xl md:text-3xl lg:text-5xl font-bold'>
                        <span className='text-gradient'>Taste the World,</span>
                        One Bite at a Time!
                    </h1>
                </ animated.div>
                <img className='w-full max-h-[500px] object-cover' src="https://plus.unsplash.com/premium_photo-1661387558893-63d24776cf38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" alt="/" />
            </div>
        </div >
    )
}

export default Hero