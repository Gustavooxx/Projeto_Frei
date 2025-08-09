import './index.scss'
import { Link } from 'react-router'

export default function Doar() {

    return (
        <div className='conteinar-doe'>

            <div className='conteinar-tags'>


                <div className='logo'>
                     <img src="/assets/images/logofrei.jpeg" />
                     <h2>Instituto Nossa <br /> Senhora <br /> De Fátima</h2> 
                </div>

                 <div className='tags'>
                    <Link to='/'>Inicio</Link>
                    <Link to='/SobreNos'  > Sobre Nos</Link>
                    <Link>Curso</Link>
                    <Link>Galeria</Link> 
                    <Link to='/Donate'>Doe</Link>
                    <Link>Contato</Link>
                </div>

            </div>

            <div className='contribuinte'>

                <div className='texto-contribuinte'>

                 <h1>Transforme vidas com sua generosidate</h1>

                    <p>Contribua e ajude a mudar vidas! Já parou para refletir sobre como pequenos atos podem causar grandes transformações? No Instituto, temos a verdade de que, unidos, podemos moldar o futuro de milhares de jovens e suas famílias. Junte-se a nós nessa missão tornando-se um doador da nossa instituição!</p>
                    
                    <div className='links'>
                        <Link>Conheça nossos Projetos</Link>
                        <Link> Doe agora</Link>
                    </div>

                </div>

                <div className='imagem-contribuinte'>

                    <div className='imagem'>

                     <img src="/assets/images/logofrei.jpeg" alt=""  width='100px'/>
                     <p>vai ser outra imagem</p>

                    </div>

                </div>

            </div>

            <div className='contribuicoes'>

                    <div className='imagem-contribuicoes'>

                        <img src="/assets/images/imagemFrei.png" alt="" width='100px'/>
                        <p>outra imagem</p>

                    </div>

                    <div className='texto-contribuicoes'>

                         <h2>Todas as formas de colaboração são bem-vindas! Contribua com sua doação:</h2>

                         <ul>
                            <li>
                            Equipamentos e Materiais: Computadores, notebooks, peças de informática, equipamentos e componentes eletroeletrônicos, itens de robótica, materiais para manutenção de carros, equipamentos de padaria, materiais de escritório e livros para a biblioteca (didáticos ou de ficção e não ficção).
                            </li>

                         </ul>

                        <ul>
                           <li>
                               Cestas Básicas: Contribua diretamente para o bem-estar de quem mais precisa.
                           </li>
                        </ul>

                    </div>

            </div>

                
        </div>

    )
}