import React from 'react'
import {AiOutlineCopyright, AiOutlineMessage} from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
        <div className='flex flex-col items-center m-auto justify-center'>
            <div className='flex'>
                <AiOutlineMessage className='mr-2' size={30}/>
                <h1>Contact us now!</h1>
            </div>
            <div className='flex'>
                <AiOutlineCopyright className='mr-2' size={30}/>
                <h1>2023 Copyright: AffiliateMarketingTech</h1>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Footer