import React, { useCallback, useEffect, useRef, useState } from 'react'

const PassGen = () => {
    const [password,setPassword]=useState("");
    const [length,setLength]=useState(10);
    const [includeNumbers,setIncludeNumbers]=useState(false);
    const [includeSymbols,setIncludeSymbols]=useState(false);

    const passwordRef =useRef(null);

    const copytoclipboard = () => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }

    const generatePassword= useCallback(() => {
        let password = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numbers = "0123456789";
        let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        if (includeNumbers) {
            str += numbers;
        }
        if (includeSymbols) {
            str += symbols;
        }

        for (let i = 1; i <= length; i++) {
            const randomIndex = Math.floor(Math.random() * str.length +1);
            password += str.charAt(randomIndex);
        }
        setPassword(password);
    }, [length, includeNumbers, includeSymbols,setPassword]);

    useEffect(() => {
        generatePassword();
    }, [length, includeNumbers, includeSymbols, generatePassword]);

  return (
    <div className='bg-zinc-900 h-screen flex justify-center items-center text-white p-5'>
        <div className='bg-zinc-700 w-full max-w-2xl mx-auto p-5 rounded-lg min-h-60'>
            <h1 className='text-3xl font-extrabold m-5 text-center'> Password Generator</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input type="text"
                className=' flex-1 bg-zinc-800 text-white p-2 outline-none' 
                value={password}
                readOnly
                ref={passwordRef}
                />
                <button onClick={copytoclipboard} className='outline-none shrink-0 bg-blue-500 text-white p-2 hover:bg-blue-300 cursor-pointer'>Copy</button>
            </div>
            <div className='flex gap-x-3 text-sm'>
            <div className='flex items-center gap-x-1'>
                <input type="range"
                min={0}
                max={20} 
                value={length}
                onChange={(e)=>setLength(e.target.value)}
                />
                <label>{length}</label>
            </div>
            <div className='flex gap-x-1 items-center'>
                <input type="checkbox" 
                defaultChecked={includeNumbers}
                onChange={()=>setIncludeNumbers((prev) => !prev)}
                />
                <label>Include Numbers</label>
            </div>
            <div className='flex gap-x-1 items-center'>
                <input type="checkbox" 
                checked={includeSymbols}
                onChange={(e)=>setIncludeSymbols(e.target.checked)}
                />
                <label>Include Symbols</label>
            </div>
            </div>


        </div>


    </div>
  )
}

export default PassGen