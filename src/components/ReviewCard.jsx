import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex flex-col items-center gap-6 '>
        <div>
            <img src={imgURL} alt="" width={120} height={120}
            className='rounded-full object-contain'/>
        </div>
        <p className='mt-6 max-w-sm info-text text-center'>{feedback}</p>
        <div className=' mt-3 flex gap-2.5 justify-center items-center'>
            <img src={star} alt=""
            width={24}
            height={24}
            className='object-contain m-0'
            />
            <p className='info-text'>({rating})</p>
        </div>
        <p className='mt-1 text-3xl font-palanquin font-bold text-center'>{customerName}</p>
    </div>
  )
}

export default ReviewCard