import React from 'react'
import { categories } from '../data/data.js';
import { useSpring, animated } from '@react-spring/web'

const Category = () => {
    const springs1 = useSpring({
        from: { x: -30, opacity: 0 },
        to: { x: 0, opacity: 1 },
        config: { duration: 2000 },
    })
    return (
        <div className='max-w-[1640px]  m-auto px-4 py-12 border border-b-2'>
            <animated.h1 style={springs1} className='text-gradient font-bold text-4xl text-center'>
                Category
            </animated.h1>
            {/* Categories */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className='shadow-md  rounded-lg p-4 flex justify-between items-center hover:bg-gradient-to-tr from-orange-50 to-orange-400 hover:text-black hover:duration-500'
                    >
                        <h2 className='font-bold sm:text-xl text-primary'>{item.name}</h2>
                        <img src={item.image} alt={item.name} className='w-20  hover:animate-bounce' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category