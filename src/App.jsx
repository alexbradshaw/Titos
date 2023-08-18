import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

 const socials = [
      {"social":"mingcute:phone-fill", "link":"tel:+17063513376","alt":"telephone link"},
      {"social":"mi:email", "link":"mailto:titogerman35@yahoo.com","alt":"email link"},
      {"social":"uiw:facebook", "link": false ? "https://www.facebook.com/" : "","alt":"facebook link"},
      {"social":"uil:instagram-alt", "link":"https://www.instagram.com/titoakagerman_thebarber","alt":"instagram link"},
      {"social":"cib:cashapp", "link":"https://cash.app/suarezgerm18","alt":"cashapp link"},
      {"social":"ion:logo-venmo", "link": false ? "https://account.venmo.com/u/" : "","alt":"venmo link"},
  ]


  return (
    <Router>
      <div className='App'>
          <Header/>
          <div className='display'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About socials={socials}/>}/>
            </Routes>
          </div>
          <Footer socials={socials}/>
      </div>
    </Router>
  )
}

export default App
