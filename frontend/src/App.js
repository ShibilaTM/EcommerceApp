
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Main from './Elements/Main';
import Auth from './ui-components/Auth';
import Admin from './Admin/Admin';


function App() {
  return (
    <div >
       
       <Routes>
     
        <Route path='/' element={<Main Children={<Shop/>}/>}/>
        <Route path='/mens' element={<Main Children={<ShopCategory category='men'/>}/>}/>
        <Route path='/womens' element={<Main Children={<ShopCategory category='women'/>}/>}/>
        <Route path='/kids' element={<Main Children={<ShopCategory category='kid'/>}/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/admin' element={<Admin/>}/>

      
       </Routes>
    </div>
  );
}

export default App;
