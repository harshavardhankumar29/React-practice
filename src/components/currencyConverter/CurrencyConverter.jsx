import React from 'react'
import InputBox from './InputBox';
import useCurrency from '../../hooks/useCurrency';
import { useState } from 'react';


const CurrencyConverter = () => {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('usd');
    const [toCurrency, setToCurrency] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrency(fromCurrency);
    const currencyOptions = Object.keys(currencyInfo);

    const swap  = () => {  
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }

    const convert = () =>{
        setConvertedAmount( (amount * currencyInfo[toCurrency]) );
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VycmVuY3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={currencyOptions}
                                selectedCurrency={fromCurrency}
                                onAmountChange={(amount) => setAmount(amount)}
                                onCurrencyChange={(currency) => setFromCurrency(currency)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={currencyOptions}
                                selectedCurrency={toCurrency}
                                onAmountChange={setConvertedAmount}
                                onCurrencyChange={(currency) => setToCurrency(currency)}
                                amountDisabled={true}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">

                            Convert {amount} {fromCurrency.toUpperCase()} to {convertedAmount} {toCurrency.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default CurrencyConverter