import React from "react";
import pic from '../assets/tst.jpg'

interface TokenProps {
    bullish: boolean
}

export function Token(props: TokenProps) {

  return (
      <tr className=''>
          <td className='flex flex-row gap-2 items-center'>
              <img className='w-10 h-10 rounded-full' src={pic} alt="" />
              <div>
                  <h1 className='text-white font-semibold'>ADA</h1>
                  <h1 className='text-gray-300 text-sm'>CardanoBep2</h1>
              </div>
          </td>
          <td>
              <h1 className='text-white font-semibold'>$0.34</h1>
              <h1 className={`${props.bullish ? 'text-green-500' : 'text-red-500'} text-sm`}>-9.45%</h1>
          </td>
          <td>
              <h1 className='text-white font-semibold'>$0.34</h1>
              <h1 className='text-gray-300 text-md'>0.0034</h1>
          </td>
      </tr>
  )
}
  