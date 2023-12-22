import React from 'react'
import { useSpring, animated } from '@react-spring/web'

const HeadCard = () => {
    const springs = useSpring({
        from: { y: 0, opacity: 0 },
        to: { y: 0.1, opacity: 1 },
        config: { duration: 2000 },
    })
    const springs1 = useSpring({
        from: { x: -30, opacity: 0 },
        to: { x: 0, opacity: 1 },
        config: { duration: 2000 },
    })
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 border border-b'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <animated.h1 style={springs} className='font-bold text-2xl px-2 pt-4 '>Foodie's Paradise: Explore, Indulge, Repeat!</animated.h1>
                    <animated.p style={springs1} className='px-2 text-gradient-headcard'>Craves</animated.p>
                    <button className='border-none bg-white text-black mx-2 absolute bottom-4 hover:bg-gradient-to-r from-slate-50 to-orange-100 hover:text-orange-500 duration-500 hover:scale-105 '>Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
                    alt='/'
                />
            </div>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <animated.h1 style={springs} className='font-bold text-2xl px-2 pt-4 '>Taste the World on Your Plate</animated.h1>
                    <animated.p style={springs1} className='px-2 text-gradient-headcard'>Yums
                    </animated.p>
                    <button className='border-none bg-white text-black mx-2 absolute bottom-4 hover:bg-gradient-to-r from-slate-50 to-orange-100 hover:text-orange-500 duration-500 hover:scale-105 '>Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
                    alt='/'
                />
            </div>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <animated.h1 style={springs} className='font-bold text-2xl px-2 pt-4 '>Eat Well, Live Well, Love Well</animated.h1>
                    <animated.p style={springs1} className='px-2 text-gradient-headcard'>Munch</animated.p>
                    <button className='border-none bg-white text-black mx-2 absolute bottom-4 hover:bg-gradient-to-r from-slate-50 to-orange-100 hover:text-orange-500 duration-500 hover:scale-105 '>Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                    alt='/'
                />
            </div>
        </div>
    )
}

export default HeadCard