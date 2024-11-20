import logo from './logo.svg';
import './App.css';
import { Login } from './Facebook-lite/Login';
import { SignUp } from './Facebook-lite/SignUp';
import { ForgotPassword } from './Facebook-lite/ForgotPassword';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Home } from './Facebook-lite/Home';
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Routes>
        <Route path='/' element= {<Login/>}></Route>
        <Route path='/SignUp' element= {<SignUp/>} ></Route>
        <Route path='/ForgetPassword' element= {<ForgotPassword/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
