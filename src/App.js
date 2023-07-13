import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Card } from './Components/Cards/Card.jsx';

import Navbar from './Components/Navbar/Navbar';
import { Thanks } from './Components/Thanks/Thanks.jsx';
import { Detail } from './Components/Detail/Detail.jsx';
import { Form } from './Components/Form/Form.jsx';

function App() {
  return (
    <>
     <Navbar/>
        <BrowserRouter>
          <Routes>
          
            <Route path='/' element={<Card/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/rentCar/:id' element={<Form/>}/>
            <Route path='/thanks' element={<Thanks/>}></Route> 

          </Routes>
        </BrowserRouter> 

    </>
  );
}

export default App;
