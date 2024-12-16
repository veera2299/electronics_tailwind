import React from 'react'
import Slider from 'react-slick';
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from '../Shared/Button';
const HeroData = [
    {
        id: 1,
        img: Image3,
        subtitle: "Beats Solo",
        title: "Branded",
        title2: "Laptops",
       
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Virtual",
    },
    {
        id: 3,
        img: Image1,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Headphone",
    },
];

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
};

const Hero = ({handleOrderPopup}) => {
    return (
        <div className='container '>
            <div className='overflow-hidden min-h-[550px] sm:min-h-[650px] hero-bg-color rounded-3xl  flex items-center justify-center '>
                <div className="container pb-8 sm:pb-0 ">
                    {/* hero section */}
                    <Slider {...settings}>
                        {
                            HeroData.map((data) => (
                                <div key={data.id}>
                                    <div className='grid grid-cols-1 sm:grid-cols-2' >
                                        <div className='flex flex-col order-2 text-center  justify-center gap-4 pt-12 
                                        sm:order-1 sm:pl-3 sm:pt-0 sm:text-left relative'>
                                            <h1
                                             data-aos="zoom-out"
                                             data-aos-duration="500"
                                             data-aos-once="true"
                                                className='text-2xl font-bold sm:text-6xl lg:text-2xl'
                                            >{data.subtitle}</h1>
                                            <h1
                                             data-aos="zoom-out"
                                             data-aos-duration="500"
                                             data-aos-once="true"
                                                className='text-5xl sm:text-6xl lg:text-7xl font-bold '
                                            >{data.title}</h1>
                                            <h1
                                             data-aos="zoom-out"
                                             data-aos-duration="500"
                                             data-aos-once="true"
                                                className='text-5xl font-bold uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] lg:text-[150px] '
                                            >{data.title2}</h1>
                                            <div onClick={handleOrderPopup}
                                             data-aos="fade-up"
                                             data-aos-offset="0"
                                             data-aos-duration="500"
                                             data-aos-delay="300"
                                            >
                                                <Button
                                                    text={"Shop by category"}
                                                    bgColor={"bg-primary"}
                                                    textColor={"text-white"}
                                                />
                                            </div>
                                        </div>
                                        {/* Image Section */}
                                        <div 
                                         data-aos="zoom-in"
                                         data-aos-once="true"
                                        className=' order-1 sm:order-2 '>
                                            <img src={data.img} alt=""
                                                className='order-1 w-[300px] h-[300px]  mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] 
                                                sm:w-[450px] sm:h-[450px] sm:scale-105  object-contain relative z-30'
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Hero
