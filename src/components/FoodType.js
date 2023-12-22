import React, { useState } from 'react'
import { data } from '../data/data.js';
import { useSpring, animated } from '@react-spring/web'

const FoodType = () => {
    var min = 1;
    var max = 100;
    const randomNum = () => {
        const rand = min + Math.random() * (max - min)
        const finalNum = Math.floor(rand)
        // console.log(finalNum)
        return finalNum
    }
    //   console.log(data);
    const [foods, setFoods] = useState(data);
    const springs1 = useSpring({
        from: { x: -80, opacity: 0 },
        to: { x: 0, opacity: 1 },
        config: { duration: 2000 },
    })
    //   Filter Type burgers/pizza/etc
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };
    //   Filter by price
    const filterPrice = (minPrice, maxPrice) => {
        setFoods(
            data.filter((item) => {
                const itemPrice = parseFloat(item.price);
                return (
                    (!minPrice || itemPrice >= minPrice) &&
                    (!maxPrice || itemPrice <= maxPrice)
                );
            })
        );
    };
    return (
        <div id='#menu' className='max-w-[1640px] mx-auto px-4 py-12  border border-b'>
            <animated.h1 style={springs1} className='text-gradient font-bold text-4xl text-center mb-1'>
                Populer Menu Items
            </animated.h1>
            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Fliter Type */}
                <div>
                    <p className='font-bold text-primary'>Filter Type</p>
                    <div className='flex justfiy-between flex-wrap'>
                        <button
                            onClick={() => setFoods(data)}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-500'
                        >
                            All
                        </button>
                        <button
                            onClick={() => filterType('burger')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-500'
                        >
                            Burgers
                        </button>
                        <button
                            onClick={() => filterType('pizza')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-500'
                        >
                            Pizza
                        </button>
                        <button
                            onClick={() => filterType('salad')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-500'
                        >
                            Salads
                        </button>
                        <button
                            onClick={() => filterType('StreetFoods')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-500'
                        >
                            StreetFoods
                        </button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className='font-bold text-primary'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button
                            onClick={() => filterPrice(10, 30)}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-500'
                        >
                            10-30
                        </button>
                        <button
                            onClick={() => filterPrice(30, 60)}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-500'
                        >
                            30-60
                        </button>
                        <button
                            onClick={() => filterPrice(60, 90)}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-500'
                        >
                            60-90
                        </button>
                        <button
                            onClick={() => filterPrice(90)}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-500'
                        >
                            90+
                        </button>
                    </div>
                </div>
            </div>

            {/* Display foods */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div
                        key={index}
                        className='border shadow-lg rounded-lg hover:scale-105 duration-300 hover:bg-slate-200'
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className='w-full h-[200px] object-cover rounded-t-lg'
                        />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-semibold text-primary'>{item.name}</p>
                            <p className='hover:animate-bounce'>
                                <span className='bg-orange-500 text-white py-1 px-3 rounded-md'>
                                    $&nbsp;{item.price}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FoodType

