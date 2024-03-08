import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import User from './user'

function App() {
  const [color, setColor] = useState("black")

  return (
  
    /* Props topic */
    /* <h1 className='font-bold'>Tailwind</h1>
     <User username = "Sagarika"/>
     <User username = "S Sahoo"/> */

     <div className="h-screen w-full"
     style={{backgroundColor: color}}>
      <div className=" fixed flex flex-wrap gap-3 bg-white py-2 px-4 rounded-xl justify-center bottom-12 inset-x-0 w-1/2 m-auto " >
        <button  onClick={() => setColor("#FD5959")} className ="py-2 px-4 rounded-2xl  font-bold"
         style={{backgroundColor: '#FD5959'}}>Red</button>
        <button onClick={() => setColor("#7EFF80")} className=" py-2 px-4 rounded-2xl font-bold "
         style={{backgroundColor: '#7EFF80'}}>Green</button>
        <button onClick={() => setColor("#FFFF7E")} className=" py-2 px-4 rounded-2xl font-bold"
         style={{backgroundColor: '#FFFF7E'}}>Yellow</button>
        <button onClick={() => setColor("#7ED0FF")} className=" py-2 px-4 rounded-2xl font-bold "
         style={{backgroundColor: '#7ED0FF'}}>Blue</button>
        <button onClick={() => setColor("wheat")} className="py-2 px-4 rounded-2xl font-bold"
         style={{backgroundColor: 'wheat'}}>Wheat</button>
           <button onClick={() => setColor("#CBC3E3")} className="py-2 px-4 rounded-2xl font-bold"
         style={{backgroundColor: '#CBC3E3'}}>Lavender</button>


      </div>


     </div>


    
  )
}

export default App
