
import './App.css';
import {Button} from '@mui/material';
import Navbar from './components/navbar';
import MyCard from './components/myCard';
 

function App() {
  return (
    <div className="App">
    <Navbar/>
      <h1>Welcome to My Live Cricket Score Application</h1>
      <MyCard/>
    </div>
  );
}

export default App;
