import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../features/counter/counterSlice'


function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // save to local storage
  useEffect(() => {
    localStorage.setItem("countValue", JSON.stringify(count));
  },[count])

  





  // const [count, setCount] = useState(()=>{
  //   const saved = localStorage.getItem("countValue")
  //   if(saved!==null) return JSON.parse(saved)
  //   else return 0
  // });

  // const Increment = () => {
  //   const newCount = count+1
  //   setCount(newCount)
  //   localStorage.setItem("countValue", JSON.stringify(newCount))
  // }

  // const Decrement = () => {
  //   const newCount = count-1;
  //   if(newCount>=0){
  //     setCount(newCount)
  //     localStorage.setItem("countValue", JSON.stringify(newCount))
  //   }
  // }


  return (
    <>
      <div className='bg-black flex flex-col justify-center items-center h-screen gap-4 text-white'>
        <div className=' text-3xl font-bold '>Count:{count} </div>
        <button className='bg-green-600 px-8 text-3xl hover:bg-green-800 rounded-2xl '
          onClick={(e) => {
            console.log(e)
            dispatch(increment())
          }}
        >Increment +</button>
        <button className='bg-yellow-600 px-8 text-3xl hover:bg-yellow-800 rounded-2xl '
          onClick={(e) => {dispatch(decrement())}}

        >Decrement - </button>
        <button className='bg-red-600 px-8 text-3xl hover:bg-red-800 rounded-2xl '
          onClick={(e) => {dispatch(reset())}}

        >Reset </button>

      </div>
    </>
  )
}

export default App
