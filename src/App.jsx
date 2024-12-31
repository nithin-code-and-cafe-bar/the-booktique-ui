import { Header } from './components/header/header';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Shelf } from './components/shelf/shelf';
import { DashBoard } from './components/dashboard/dashboard';
function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element = {<DashBoard />} />
          <Route path='/dash-board' element = {<DashBoard />} />
          <Route path='/book-shelf' element = {<Shelf />} />
        </Routes>
    </>
  )
}

export default App
