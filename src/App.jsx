import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Interests from './components/Interests'
import "./App.css"

function App() {
  return (
    <div className='card'>
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  )
}

export default App
