import { Header } from './components/header/header';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Shelf } from './components/shelf/shelf';
import { DashBoard } from './components/dashboard/dashboard';
import { AddNewBook } from './components/new-book/add-book';
import { CritiqueList } from './components/critique/critique-list';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/dash-board' element={<DashBoard />} />
        <Route path='/book-shelf' element={<Shelf />} />
        <Route path='/new-book' element={<AddNewBook />} />
        <Route path='/critiques' element={<CritiqueList />} />
      </Routes>
    </>
  )
}

export default App
