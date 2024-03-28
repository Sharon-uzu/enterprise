import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Screen/Login';
import Create from './Screen/Create';
import Dashboard from './Screen/Dashboard';
import Sales from './Screen/Sales';
import Invoice from './Screen/Invoice';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/sales' element={<Sales/>} />
        <Route path='/invoice' element={<Invoice/>} />
      </Routes>
    </div>
  );
}

export default App;
