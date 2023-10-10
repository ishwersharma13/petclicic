import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';

import ServiceList from './component/ServiceList';
import ServiceCreate from './component/ServiceCreate';
import ServiceDetail from './component/ServiceDetail';
import ServiceEdit from './component/ServiceEdit';
import PetListing from './component/PetListing';
import PetCreate from './component/PetCreate';
import PetDetail from './component/PetDetail';
import PetEdit from './component/PetEdit';

import './App.scss';
import PetManagement from './Pages/PetManagement';
import Services from './Pages/Services';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { AuthProvider } from './component/context/AuthContext';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route exact path='/' element={<Login />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>

            <Route exact path='/dashboard' element={< Dashboard />}></Route>
            <Route path='/petmanagement' element={< PetManagement />}></Route>
            <Route path='/services' element={< Services />}></Route>

            <Route path='/pet/listing' element={<PetListing />}></Route>
            <Route path='/create' element={<PetCreate />}></Route>

            <Route path='/pet/detail/:petid' element={<PetDetail />}></Route>
            <Route path='/pet/edit/:petid' element={<PetEdit />}></Route>


            <Route path='/services/listing' element={<ServiceList />}></Route>
            <Route path='/screate' element={<ServiceCreate />}></Route>

            <Route path='/services/detail/:serid' element={<ServiceDetail />}></Route>
            <Route path='/services/edit/:serid' element={<ServiceEdit />}></Route>


          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
