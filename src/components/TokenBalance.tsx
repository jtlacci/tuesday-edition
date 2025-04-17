'use client';

import { useState } from 'react';

export default function TokenBalance({ balance = "12.5" }) {
  const [withdrawAddress, setWithdrawAddress] = useState('');
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Example address - in a real app this would be generated from a wallet
  const depositAddress = "0xE5Df...8A21";
  
  const handleWithdraw = () => {
    // In a real app, this would connect to a wallet or contract
    alert(`Withdrawing all $TEdition1 to address: ${withdrawAddress}`);
    setWithdrawAddress('');
    setIsWithdrawing(false);
  };
  
  const copyAddress = () => {
    // In a real app, this would copy the full address to clipboard
    navigator.clipboard.writeText(depositAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="py-3 px-4 border border-gray-300 bg-gray-50 w-72">
      <div className="text-xs text-gray-500 mb-1">Your Balance</div>
      <div className="font-serif font-bold mb-2">
        {balance} <span className="text-sm">$TEdition1</span>
      </div>
      
      <div className="flex justify-between mb-3">
        <button 
          onClick={() => {
            setIsWithdrawing(!isWithdrawing);
            setShowDeposit(false);
          }}
          className="text-xs text-gray-700 font-medium hover:text-black"
        >
          {isWithdrawing ? "Cancel" : "Withdraw →"}
        </button>
        
        <button 
          onClick={() => {
            setShowDeposit(!showDeposit);
            setIsWithdrawing(false);
          }}
          className="text-xs text-gray-700 font-medium hover:text-black"
        >
          {showDeposit ? "Hide" : "Deposit →"}
        </button>
      </div>
      
      {isWithdrawing && (
        <div className="mt-2 space-y-2 border-t border-gray-200 pt-2">
          <div className="text-xs mb-1">Enter withdrawal address:</div>
          <input
            type="text"
            value={withdrawAddress}
            onChange={(e) => setWithdrawAddress(e.target.value)}
            placeholder="0x..."
            className="w-full text-sm border border-gray-300 px-2 py-1"
          />
          <button 
            onClick={handleWithdraw}
            className="w-full text-xs px-3 py-1 bg-gray-900 text-white"
          >
            Withdraw All
          </button>
        </div>
      )}
      
      {showDeposit && (
        <div className="mt-2 space-y-2 border-t border-gray-200 pt-2">
          <div className="flex items-center justify-center">
            {/* Simple QR code representation - in a real app, use a QR code library */}
            <div className="w-24 h-24 bg-gray-800 flex items-center justify-center">
              <div className="w-20 h-20 bg-white p-1">
                <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-0.5">
                  {Array(25).fill(0).map((_, i) => (
                    <div 
                      key={i}
                      className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-white'} border border-gray-100`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-2 space-y-1">
            <div className="flex items-center">
              <div className="text-xs flex-1 truncate mr-1">{depositAddress}</div>
              <button
                onClick={copyAddress}
                className="text-xs px-2 py-0.5 border border-gray-300 hover:bg-gray-100"
              >
                {copied ? "✓" : "Copy"}
              </button>
            </div>
            <div className="text-xs text-red-600 text-center font-medium">
              *only deposit $TEdition1
            </div>
          </div>
        </div>
      )}
    </div>
  );
}