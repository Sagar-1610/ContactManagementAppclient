
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App h-screen w-screen">
      <BrowserRouter>
       <div className="bg-blue-400" >
       <Header />
       </div>
       <div className='h-full w-full middle'>
        <Routes>
         
          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/update/:id' element={<UpdateContact/>}/>
          <Route path='/addcontact' element={<AddContact/>}/>
          </Route>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
         
        </Routes>
        </div>
        <div  className="bg-blue-400"> 
        <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
