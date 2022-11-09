import { ChainNetwork } from './ChainNetwork';
import React, { useState } from 'react'
import { shortenAddress } from '../utils';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { IoIosArrowDown } from 'react-icons/io';

export function Header() {

    const networks = [];
    const [showNetWorks, setShowNetworks] = useState(false);

    return (
        <div className='flex flex-row gap-4 relative'>
            <h1 className='text-white font-bold text-3xl'>Portfolio</h1>
            <div className='flex items-center border rounded-full hover:bg-blue-500 cursor-pointer'>
                <div className='flex flex-row gap-2 p-2 items-center'>
                    <Jazzicon diameter={20} seed={jsNumberForAddress('0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE')} />
                    <p className='text-white text-xs'>{shortenAddress('0x3f5CE5FBFeshsh3E9af3971dD833D26bA9b5C936f0bE')}</p>
                </div>
            </div>
            <div onClick={() => setShowNetworks(prev => !prev)} className='flex items-center border rounded-full hover:bg-blue-500 cursor-pointer'>
                <div className='flex flex-row gap-2 px-2 py-[1px] items-center'>
                    {networks.length !== 0 ? <Jazzicon diameter={20} seed={jsNumberForAddress('0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE')} /> : <p className='text-white'>0</p>}
                    <p className='text-white text-xs'>Networks</p>
                    <IoIosArrowDown className='text-white' />
                </div>
            </div>
            {showNetWorks && <div className='absolute rounded-lg bg-sky-900 w-60 h-60 top-11 left-[304px] p-4'>
                <ChainNetwork />
                <ChainNetwork />
                <ChainNetwork />
            </div>}
        </div>
    )
}
