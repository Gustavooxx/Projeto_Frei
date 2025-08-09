import './index.scss'

import { Link } from 'react-router-dom'

export default function Site() {
    return (
        
        <div className='conteinar-inicio'>

            <div className='conteinar-tags'>

                <div className='logo'>
                    <img src="/public/assets/images/logofrei.jpeg" alt="logoFrei" />
                    <h2>Instituto Nossa <br /> Senhora <br /> De Fátima</h2> 
                </div>

                <div className='tags'>
                    <Link to='/'>Inicio</Link>
                    <Link to='/SobreNos' className='SobreNos' > Sobre Nos</Link>
                    <Link>Curso</Link>
                    <Link>Galeria</Link> 
                    <Link to='/Doe'>Doe</Link>
                    <Link>Contato</Link>
                </div>


            </div>

            <div className='conteinar-numeros'>

                <div className='inscricao'>
                    
                     <p className='titleP'>
                        Faça já sua inscrição para participar<br />
                        da nossa feira de profissões!
                        </p>

                    <div className='button'>
                        <Link to='/Cadastro'>Cadastre-se</Link>
                    </div>

                </div>

                <div className='container-bolinhas'>

                     <div className='bolinha'>
                       <p></p>
                     </div>
                     <div className='bolinha'>
                        <p></p>
                     </div>
                     <div className='bolinha'>
                       <p></p>
                     </div>
                </div>

                    <div className='imagemFrei'>
                        <img src="/public/assets/images/imagemFrei.png" />  
                    </div>    

                <h1 className='frase'>“Esforço que  transforma, e o orgulho permanece”.</h1>
                
            </div>


            <div className="ApresentacaoCurso">

                <div className='video'>

                <p>video</p>

                </div>

                <div className='texto_apresentacao'>
                    <p>vai ter um texto aqui</p>
                </div>

            </div>

            <div className='iconeCurso'>

            </div>

        </div>
    )
}