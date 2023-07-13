import NavBar from './Components/Navbar/Navbar'

function App() {
  return (
    <>
     <NavBar/>
        <BrowserRouter>
          <Routes>
          
            {/* <Route path='/' element={<Hotels/>}/>
            <Route path='/rent/:id' element={<HotelCard/>}/>
            <Route path='/checkout/:id' element={<CheckOut/>}/>
            <Route path='/info/' element={<Info/>}></Route> */}

          </Routes>
        </BrowserRouter> 

    </>
  );
}

export default App;
