import React from 'react';
import { FaUtensils, FaUserCheck, FaListAlt, FaStar, FaHandsHelping, FaRecycle, FaLock, FaTruck } from 'react-icons/fa';


const ChoosUs = () => {

    const data = [
        {
            "point": "Quality Ingredients",
            "text": "Indulge in a culinary journey crafted with the finest, farm-fresh ingredients. We are committed to delivering a dining experience that elevates quality and taste."
        },
        {
            "point": "Chef Expertise",
            "text": "Meet our talented culinary artisans whose passion for food is reflected in every dish. Our chefs bring a wealth of expertise and creativity to your table."
        },
        {
            "point": "Customer Reviews and Testimonials",
            "text": "Discover what our patrons are saying about us. Read real reviews and testimonials from delighted customers who have savored our culinary creations."
        },
        {
            "point": "Hygiene and Safety Practices",
            "text": "Your well-being is our top priority. We adhere to the highest hygiene and safety standards, ensuring a clean and secure environment for you to enjoy your dining experience."
        },
        {
            "point": "Secure Online Transactions",
            "text": "Rest assured, your online transactions are secure with us. We employ robust security measures to protect your personal and financial information during every order."
        },
        {
            "point": "Prompt and Reliable Delivery",
            "text": "Experience prompt and reliable delivery services that bring your favorite dishes straight to your door. Trust us for timely and efficient delivery, ensuring your satisfaction with every order."
        }
    ]
    const getIconComponent = (point) => {
        switch (point) {
            case 'Quality Ingredients':
                return <FaUtensils />;
            case 'Chef Expertise':
                return <FaUserCheck />;
            case 'Transparent Menus':
                return <FaListAlt />;
            case 'Customer Reviews and Testimonials':
                return <FaStar />;
            case 'Hygiene and Safety Practices':
                return <FaHandsHelping />;
            case 'Social Responsibility':
                return <FaRecycle />;
            case 'Secure Online Transactions':
                return <FaLock />;
            case 'Prompt and Reliable Delivery':
                return <FaTruck />;
            default:
                return null;
        }
    };


    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-3/4 md:w-2/3 md:pr-10 md:py-6">
                            {data.map((item) => (
                                <div className="flex relative pb-5">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-orange-200 pointer-events-none"></div>
                                    </div>
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10 hover:animate-bounce">
                                        {getIconComponent(item.point)}
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h1 className="font-medium title-font text-base text-gradient-h mb-1 tracking-wider">{item.point}</h1>
                                        <p className="leading-5  text-[#292524]">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <img className="lg:w-1/4 md:w-1/3 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=600" alt="step" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChoosUs