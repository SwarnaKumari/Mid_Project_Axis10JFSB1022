
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import Navbar from './component/Navbar';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import UsersList from './component/UsersList';
import Login from './component/Login';
import Signup from './component/Signup';
import UserLogin from './component/UserLogin';
import UserHome from './component/UserHome';
import UserSignup from './component/UserSignup';
import AllTransactions from './component/AllTransactions';
import Logout from './component/Logout';


function App() {
  return (
    <>
    
    
    <Routes>
        <Route path='' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
        <Route path='/editProduct/:id' element={<EditProduct />}></Route>
        <Route path='/usersList' element={<UsersList/>}></Route>
        <Route path='/userlogin' element={<UserLogin/>}></Route>
        <Route path='/userhome' element={<UserHome/>}></Route>
        <Route path='/usersignup' element={<UserSignup/>}></Route>
        <Route path='/alltransactions' element={<AllTransactions/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </>
  );
}

export default App;
