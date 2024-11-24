import Image from 'next/image'
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



export const ProductItemV1 = () => {
  return (
    
    <div className='product-item-v1'>
      <div className="imgWrapper relative p-4 ">
      <Checkbox 
      {...label}
       icon={<FavoriteBorder />}
       checkedIcon={<Favorite />}
       className='wishlist absolute top-[15px] right-[15px] z-[99]' />
        <Image src="/drop1.jpg" alt="Product1" width={"100"} height={"100"} />
      
          <div className='flex items-center justify-between'>
            <span className='price flex items-center justify-normal px-3 py-1 m-2
            text-y text-lg text-weight-bold bg-brown rounded-md'>100 taka</span>
            
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} size='small' readOnly />
          </div>
      </div>

      <div className='info p-4'>
      <h4 className='text-center font-bold'>The Face Shop</h4>
      <p className='text-black/70'>Rice Water Bright Foam Cleanger 150 ml...</p>
      </div>

    </div>
  );
};


