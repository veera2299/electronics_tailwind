import React from 'react'
import Button from '../Shared/Button'

const ProductCard = ({ data }) => {
    return (
        <div className='mb-10'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-5">
                {/* card section */}
                {data.map((data) => (
                    <div data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={data.id} className='group'>
                        <div className='relative'>
                            <img src={data.img} alt=""
                                className='w-[260px] h-[180px] rounded-md object-cover '
                            />
                            {/* button hover */}
                            <div className="hidden group-hover:flex items-center 
                            justify-center group-hover:backdrop-blur-sm w-full
                             h-full absolute top-0 duration-200 rounded-md">
                                <Button
                                    bgColor="bg-primary"
                                    text={"Add to Cart"}
                                    textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <div className='leading-7'>
                            <h2 className='font-semibold'>{data.title}</h2>
                            <h2 className='font-bold'>${data.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard
