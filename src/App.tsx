import { useEffect, useState } from 'react'
import { ethers } from 'ethers';
import { alchemy } from './sdk';
import { Home } from './components';
import { Network } from 'alchemy-sdk';
declare var window: any;
const { ethereum } = window;

function App() {
  
  return (
   <Home />
  )
}

export default App
