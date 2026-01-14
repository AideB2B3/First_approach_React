import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WelcomeMessage } from './Components /WelcomeMessage'
import { Counter } from './Components /Counter'
import { RandomUser } from './Components /RandomUser'

function App() {
  

  return (
    <>
      <WelcomeMessage message={'hello Word'} title />
      <WelcomeMessage message={'Ciao ragazzi'}/>
      <WelcomeMessage/> 

      <Counter />

      <RandomUser/>


    </>
  )
}

export default App
