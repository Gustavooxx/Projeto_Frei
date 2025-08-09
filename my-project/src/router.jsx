import { StrictMode } from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Site from './pages/home/index.jsx'
import SobreNos from './pages/Surnames/index.jsx'
import Registrar from './pages/Register/index.jsx'
import Doar from './pages/Donate/index.jsx'


export default function Navegacao() {
    return (
         <StrictMode>
            <BrowserRouter>
               <Routes>
                 <Route path="/" element={<Site />} />
                 <Route path='/SobreNos' element={<SobreNos />}/>
                 <Route path='/Register' element={<Registrar/>}/>
                 <Route path='/Donate' element={<Doar/>}/>
              </Routes>
            </BrowserRouter>
          </StrictMode>
    )
}