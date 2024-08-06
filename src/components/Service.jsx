import React from 'react'
import bowl1 from './images/bowl-2.png'
import bowl2 from './images/bowl-4.png'
import bowl3 from './images/bowl.png'
import bowl4 from './images/bowl-5.png'

const Service = () => {
    return (
        <div className='text-center'>
            <p className='text-6xl font-semibold py-10 '>Our Special Dish</p>
            <p className='mt-2 font-thin pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum consectetur amet <br></br> consectetur adipisicing elit, hic, iure</p>
            <div className='pictures flex items-center content-around gap-10 ms-4 me-4'>
                <div className='flex flex-col items-center gap-3 rounded-tl-full rounded-br-full rounded-tr-full  py-28 bg-orange-200 '>
                    <div className='flex content-around items-start'>
                        <img src={bowl1} alt='bowl1'></img>
                        <div className='bg-black text-white rounded-full p-1 -ms-10 mt-10'>12$</div>
                    </div>
                    <p className='font-bold text-2xl'>Lupia with sauce</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe dolore architecto magnam ducimus sapiente ab, voluptatum debitis assumenda sunt.</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <div className='flex content-around items-start relative'>
                        <img src={bowl2} alt='bowl2'></img>
                        <div className='bg-red-600 text-white rounded-e-xl rounded-tl-xl absolute px-4 py-1 top-0 end-0 font-semibold hover:text-slate-600 hover:bg-red-300'>Bestseller <br /> Dish</div>
                        <div className='bg-black text-white rounded-full p-1 -ms-10 mt-10'>10$</div>
                    </div>
                    <p className='font-bold text-2xl'>Lupia with sauce</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe dolore architecto magnam ducimus sapiente ab, voluptatum debitis assumenda sunt.</p>
                </div>

                <div className='flex flex-col items-center gap-3 ' >
                    <div className='flex content-around items-start'>
                        <img src={bowl3} alt='bowl3'></img>
                        <div className='bg-black text-white rounded-full p-1 -ms-10 mt-10'>20$</div>
                    </div>
                    <p className='font-bold text-2xl'>Lupia with sauce</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe dolore architecto magnam ducimus sapiente ab, voluptatum debitis assumenda sunt.</p>
                </div>
                <div className='flex flex-col items-center gap-3' >
                    <div className='flex content-around items-start'>
                        <img src={bowl4} alt='bowl4'></img>
                        <div className='bg-black text-white rounded-full p-1 -ms-10 mt-10'>13$</div>
                    </div>
                    <p className='font-bold text-2xl'>Lupia with sauce</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe dolore architecto magnam ducimus sapiente ab, voluptatum debitis assumenda sunt.</p>
                </div>
            </div>
        </div>
    );
}

export default Service