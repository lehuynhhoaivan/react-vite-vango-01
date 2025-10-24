import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import styles from './components/css/MyComponent.module.css'

// () => { }
// component = html + css + js
const MyComponent = () => {
  return (
    <h4 className={styles.textName}>VANGO</h4>
  )
}

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

      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
