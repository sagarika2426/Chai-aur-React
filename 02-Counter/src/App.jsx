import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    // setCount(count+1);
    setCount((Prevcount)  => Prevcount+1);
    // setCount((Prevcount)  => Prevcount+1);
    // setCount((Prevcount)  => Prevcount+1);
    // setCount((Prevcount)  => Prevcount+1);
    
  }

  const removeValue = () =>{
    if (count > 0){
      count = count-1;
      
    }
    
    
    setCount(count);
  }

  return (
    <>
    <img src='https://cdna.artstation.com/p/assets/images/images/001/815/492/large/steven-kuo-hi-res-tapcount-icon.jpg?1453184799'></img>
      <h2>Chai aur React☕</h2>
      <h1>Counter Value : {count}</h1>
      <button onClick={addValue}>Increase</button>
      <button onClick={removeValue}> Decrease</button>
    </>
  )
}

export default App
