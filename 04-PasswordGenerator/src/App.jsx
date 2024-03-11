// import { useCallback, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState, useEffect, useRef} from 'react'
import { useCallback } from 'react';
import './App.css'

function App() {

  // Functionlities 
  // set default length as anything you want to start with
  const[length, setLength] = useState(6);

  // by keeping numberAllowed and charAllowed false it means when you get a random password number and char wont be included in that
  const[numAllowed, setNumAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);

  // Keeping the default value as empty as we want to generate the password
  const[password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null);

  
  // useCallback Hook - keep in memory 
  // as the password is changing when we change length, num and chars, these are the dependencies
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // from this string passowrd will get generated

    if(numAllowed === true) {
      str += "0123456789";
    }
    if(charAllowed === true){
      str += "!@#$%^&*";
    }

    // How many times you have to loop the str? Same as length
    // Get random chars from the str to get the password
    for(var i = 1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length )

      pass += str.charAt(char)
    }
    setPassword(pass)


  },[length, numAllowed, charAllowed])


  // how to copy the password after clicking copy
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    alert('Your password has been copied to the clipboard!');
  },[password])


  useEffect(() => {
    passwordGenerator()
  }
  ,[length, numAllowed, charAllowed, passwordGenerator])



  return (
    <>
  <div className='flex border-b-2 m-auto text-center justify-center gap-2 mb-16 py-4 bg-slate-900'>
    <h1 className='font-bold text-white text-3xl my-6'>Password Generator</h1>
   
    <div className='my-auto'>
        <img src='https://e7.pngegg.com/pngimages/708/705/png-clipart-password-manager-password-safe-android-blue-electric-blue-thumbnail.png' className='rounded-full w-16' alt='Password Icon' />
    </div>
    
</div>
    
    <div className='w-full max-w-xl mx-auto shadow-md bg-gray-800 py-10 px-10 rounded-md'>
      <div className='flex shadow rounded-lg mb-4'>
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3 rounded-lg text-orange-600 font-semibold'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        // we want to highlight once we copy it this input that's why put the ref
        />
        <button className='bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700'
        onClick={copyPasswordToClipboard}>
          Copy
        </button>

      </div>
{/* Range */}
      <div className='text-white flex gap-10 m-auto text-lg '>
        <div>
          <input
          type='range'
          min={6}
          max={30}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}/>
          <label className='ml-2'>Length:{length}</label>
        </div>
{/* Number box */}
        <div>
          <input
          type='checkbox'
          defaultChecked={numAllowed}
          onChange={() => {
            setNumAllowed((prev) => !prev)
          }}/>
          <label className="ml-2">Numbers
          </label>
        </div>
{/* char box */}
        <div>
          <input
          type='checkbox'
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}/>
          <label className='ml-2'>Characters
          </label>
        </div>


      </div>
    </div>

    <p className='text-white text-center mt-96 '>@Sagarika Sahoo </p>

    </>
  )
}

export default App
