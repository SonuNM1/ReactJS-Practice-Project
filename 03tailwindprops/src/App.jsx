import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Sonu NM', 
    age: 23,
    address: {
      city: 'Sitamarhi',
      state: 'Bihar',
      country: 'India'
    }
  }

  let newArr = [1,2,3,4,5,6,7,8,9]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md' >Vite with Tailwind</h1>
      <Card 
      username="Sonu NM" 
      post='Software Engineer' 
      imageUrl= "https://images.pexels.com/photos/6129361/pexels-photo-6129361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card myArr = {newArr} />
      <Card/>
    </>
  )
}

export default App
