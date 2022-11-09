import { Token } from './Token';
import { useState } from 'react';
import { Header } from './Header';
import pic from '../assets/tst.jpg'

export default function Home() {

    const [isSelected, setIsSelected] = useState({
        tokens: true,
        nfts: false
    });

    const tokens = [1];
    const nfts = [];

    return (
        <div className='flex flex-col p-10 h-screen bg-black'>
            <Header />

            <div className='mt-10'>
                <h1 className='text-white font-bold text-3xl'>Net worth:</h1>
                <h1 className='text-gray-100 font-bold 3xl'>$100</h1>
            </div>

            <section className='rounded-lg mt-5 bg-gray-800 min-h-[30%] p-3'>
                <div className='flex gap-4'>
                    <input className='focus:outline-none text-sm text-gray-100 p-1 bg-gray-500 rounded-sm' type="text" placeholder='Enter address' />
                    <button className='py-1 px-4 bg-sky-500 hover:bg-sky-700 rounded-lg outline-none text-white text-sm'>Search</button>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='text-white font-semibold text-3xl'>Assets</h1>
                    <div className='border rounded-full'>
                        <div className='flex flex-row gap-2 rounded-full p-1'>
                            <div className={`py-2 px-4 rounded-full cursor-pointer text-gray-300 ${isSelected.tokens && 'bg-slate-400 text-white'}`} onClick={() => setIsSelected({ ...isSelected, tokens: true, nfts: false })}>Tokens</div>
                            <div className={`py-2 px-4 rounded-full cursor-pointer text-gray-300 ${isSelected.nfts && 'bg-slate-400 text-white'}`} onClick={() => setIsSelected({ ...isSelected, tokens: false, nfts: true })}>NFTs</div>
                        </div>
                    </div>
                </div>

                {isSelected.tokens && (
                <div>
                    <table className='w-full mt-8'>
                        <tr className=''>
                            <th>Token</th>
                            <th>Price</th>
                            <th>Balance</th>
                        </tr>

                        <tr className='border-[0.2px] border-gray-400'></tr>
                        {tokens.length !== 0 && (
                            <>
                                <Token bullish={true} />
                                <Token bullish={false} />
                                <Token bullish={true} />
                            </>
                        )}
                    </table>

                    {tokens.length === 0 && (
                        <div className='flex justify-center h-52 items-center'>
                            <h1 className='text-center text-gray-100 font-bold'>No tokens found</h1>
                        </div>)}
                </div>)}

                {isSelected.nfts && (
                    <div className='py-5'>
                    {nfts.length === 0 && (
                        <div className='flex justify-center items-center p-5 border border-gray-200 border-gray-150 h-32 rounded-lg'>
                            <h1 className='text-white font-semibold'>No NFTs</h1>
                        </div>
                    )}
                    <div>

                    </div>
                    </div>
                )}

            </section>


        </div>
    )
}
