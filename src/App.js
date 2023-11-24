// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import "./App.css"
import Home from './Home'
import Aboutus from './Aboutus'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Footer from './Footer'
import Services from './Services'
import Product from './Product'
import Contactus from './Contactus'

function App() {
  return (
    <div className='conainer'>
     <Router>
        <Navbar />
        <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='abt' element={<Aboutus/>}/>
        <Route path='service' element={<Services/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='contactus' element={<Contactus/>}/>
        </Routes>

        <Footer />
     </Router>
     
      
      

      {/* <h1 style={{ color:"red", textAlig:"center" }}>header 1</h1>
      <h2>header2</h2> */}
    </div>
  )
}

export default App