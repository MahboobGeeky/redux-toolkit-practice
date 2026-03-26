import React from 'react'
import { useState } from 'react'



function App() {
  const [count, setCount] = useState(()=>{
    const saved = localStorage.getItem("countValue")
    if(saved!==null) return JSON.parse(saved)
    else return 0
  });
  
  


  const Increment = () => {
    const newCount = count+1
    setCount(newCount)
    localStorage.setItem("countValue", JSON.stringify(newCount))
  }

  const Decrement = () => {
    const newCount = count-1;
    if(newCount>=0){
      setCount(newCount)
      localStorage.setItem("countValue", JSON.stringify(newCount))
    }
  }


  return (
    <>
      <div className='bg-black flex flex-col justify-center items-center h-screen gap-4 text-white'>
        <div className=' text-3xl font-bold '>Count:{count} </div>
        <button className='bg-green-600 px-8 text-3xl hover:bg-green-800 rounded-2xl '
          onClick={(e) => {
            console.log(e)
            Increment(count)

          }}
        >Increment +</button>
        <button className='bg-yellow-600 px-8 text-3xl hover:bg-yellow-800 rounded-2xl '
          onClick={(e) => {Decrement(count)}}

        >Decrement - </button>

      </div>
    </>
  )
}

export default App
