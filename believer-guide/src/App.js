
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import SignIn from './Pages/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
