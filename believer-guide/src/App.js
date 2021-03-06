
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import SignIn from './Pages/SignIn/SignIn';
import Footer from './Pages/Shared/Footer/Footer';
import CheckOut from './Pages/CheckOut/CheckOut';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './hooks/RequireAuth/RequireAuth';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Profile from './Profile/Profile';
import PageNotFound from './Pages/PageNotFound/PageNotFound'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>

        <Route path='checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>}>
        </Route>

        <Route path='profile' element={
          <RequireAuth>
            <Profile></Profile>
          </RequireAuth>
        }></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
