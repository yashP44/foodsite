import React, { useEffect, useState } from 'react'
import { BsChevronCompactLeft } from 'react-icons/bs'
import { BsChevronCompactRight } from 'react-icons/bs'
import { useSpring, animated } from 'react-spring';

const Slider = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHwwfDB8fHww'
        },
        { url: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { url: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D' },
        { url: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { url: 'https://images.pexels.com/photos/920570/pexels-photo-920570.jpeg?auto=compress&cs=tinysrgb&w=600' }
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
    const prev = () => {
        const isFisrtSlide = currentIndex === 0
        const newIndex = isFisrtSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const next = () => {
        const isLasSlide = currentIndex === slides.length - 1;
        const newIndex = isLasSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    useEffect(() => {
        // Automatically move to the next slide every 3 seconds (adjust the time as needed)
        const intervalId = setInterval(() => {
            next();
        }, 2000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [currentIndex]);
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1500 },
    });
    return (
        <div className='max-w-[1440px] h-[600px] px-4 w-full m-auto py-16 relative group '>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full bg-center bg-cover duration-500 flex items-center mt-14'>
                <animated.div
                    style={fadeIn} className='absolute  text-gray-200 flex flex-col justify-center gap-2'>
                    <h1 className='px-4 text-4xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-gradient-h'>
                        Epicurean Eats
                        <span className='text-orange-500 text-gradient'>, Everyday Treats!</span></h1>
                    <h1 className='px-4 text-4xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-gradient-h'>
                        <span className='text-gradient'>Taste the World,</span>
                        One Bite at a Time!
                    </h1>
                </ animated.div>
            </div>
            {/* left arrow */}
            <div className='hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prev} size={30} />
            </div>
            {/* right arrow */}
            <div className='hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={next} size={30} />
            </div>
        </div>
    )
}

export default Slider


