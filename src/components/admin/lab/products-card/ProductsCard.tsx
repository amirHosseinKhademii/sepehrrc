import { FC } from 'react';
import {IProducts} from './interface'

export const ProductsCard:FC<IProducts> = ({data,title,columnCount}) => {

    return (
        <div className='container mx-auto flex flex-col'>
            <span className='text-center text-4xl font-medium mt-16 mb-12 '>{title}</span>
            <div style={{height:'450px'}} className={`grid grid-flow-col auto-cols-max gap-8 justify-center`}>
                {data.map((item,index) => (
                    <div style={{width:'309px'}} className='flex flex-col items-center bg-white border-2 border-gray-100 shadow-lg rounded-xl'>
                        <img src={item.cover} className='mt-10' style={{height:'189px',width:'189px'}} />
                        <span className='text-lg mt-7'>{item.name}</span>
                        <div className='flex flex-row-reverse items-center mt-5'>
                        <span className='text-lg font-bold'>{item.price}</span>
                        <span className='text-sm font-bold mr-1'>تومان</span>
                        </div>
                        <button style={{height:'51px',width:'135px'}} className='mt-9 rounded-full border-2 border-red-500 text-red-500 text-sm'>افزون به سبد خرید</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

