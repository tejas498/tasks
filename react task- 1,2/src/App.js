import './App.css';
import Button from './component/Button';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About'
import Error from './component/Error';
import Library from './component/Library';
import Book from './component/Book';
import Data from './component/data';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path="/button" element={<Data/>} />
    <Route path="/library" element={<Library/>} />
    <Route path="/library/:id" element={<Book/>} />
    <Route path='*' element={<Error/>}/>
  </Routes>
  </BrowserRouter>
}

export default App;
