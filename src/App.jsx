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

  const [socials] = useState(
    [
      {"social":"mingcute:phone-fill", "link":"tel:+17063513376"},
      {"social":"mi:email", "link":"mailto:titogerman35@yahoo.com"},
      {"social":"uiw:facebook", "link":"https://www.facebook.com/tito.suarez"},
      {"social":"uil:instagram-alt", "link":"https://www.instagram.com/titoakagerman_thebarber"},
      {"social":"cib:cashapp", "link":"https://cash.app/suarezgerm18"},
      {"social":"ion:logo-venmo", "link":"https://account.venmo.com/u/German_suarez_2"},
  ]
  );

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
