import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

export function ChainNetwork() {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className='cursor-pointer flex flex-row items-center gap-2 p-1 hover:bg-blue-400 rounded-lg' onClick={() => setIsSelected(prev => !prev)}>
            <div className="w-[10%]">{isSelected && <TiTick className='text-white' />}</div>
            <div className='w-8 h-8 rounded-full bg-blue-800'>
            </div>
            <h1 className='text-white'>Ethereum</h1>
        </div>
    )
}
