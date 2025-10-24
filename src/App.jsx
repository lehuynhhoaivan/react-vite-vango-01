import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MyComponent from './components/learn/MyComponent'
import SecondComponent from './components/learn/SecondComponent'



const App = () => {
  const [count, setCount] = useState(0)

  // function myFunction() {
  //   console.log('Hello Vango')
  // }

  const myFunction = () => {
    console.log('Hello Vango')
  }
  myFunction();

  return (
    <>
      <div>
        <Header />
      </div>

      <MyComponent />

      <SecondComponent />

      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
