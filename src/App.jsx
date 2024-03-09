
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './Pages/Home'
import PlayVideo from './Pages/PlayVideo'

function App() {
  return (
    <>
     <Header/>
     <div className='p-5'>
        <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route path='/play-video/:id' element={<PlayVideo/>}></Route>
        </Routes>
     </div>
    <Footer/>
    </>
  )
}

export default App
