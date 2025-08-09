import { StrictMode } from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Site from './pages/home/index.jsx'
import SobreNos from './pages/Surnames/index.jsx'

export default function Navegacao() {
    return (
         <StrictMode>
            <BrowserRouter>
               <Routes>
                 <Route path="/" element={<Site />} />
                 <Route path='/SobreNos' element={<SobreNos />}/>
              </Routes>
            </BrowserRouter>
          </StrictMode>
    )
}