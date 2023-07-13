import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './Routes/Homepage';
import { Details } from './Routes/Details';
import { RentalForm } from './Routes/RentalForm';
import Navbar from './Components/Navbar/Navbar';
import { Thanks } from './Routes/Thanks';

function App() {
  return (
    <>
     <Navbar/>
        <BrowserRouter>
          <Routes>
          
            <Route path='/' element={<Homepage/>}/>
            <Route path='/detail/:id' element={<Details/>}/>
            <Route path='/rentCar/:id' element={<RentalForm/>}/>
            <Route path='/thanks' element={<Thanks/>}></Route> 

          </Routes>
        </BrowserRouter> 

    </>
  );
}

export default App;
