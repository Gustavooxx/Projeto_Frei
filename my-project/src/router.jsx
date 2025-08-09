import { StrictMode } from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Site from './pages/Casa/index.jsx'
import SobreNos from './pages/SobreNos/index.jsx'
import Registrar from './pages/Cadastro/index.jsx'
import Doar from './pages/Doe/index.jsx'


export default function Navegacao() {
    return (
         <StrictMode>
            <BrowserRouter>
               <Routes>
                 <Route path="/" element={<Site />} />
                 <Route path='/SobreNos' element={<SobreNos />}/>
                 <Route path='/Cadastro' element={<Registrar/>}/>
                 <Route path='/Doe' element={<Doar/>}/>
              </Routes>
            </BrowserRouter>
          </StrictMode>
    )
}