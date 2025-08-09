import './index.scss'
import { Link } from 'react-router'

export default function SobreNos() {
    return (
        <div className='conteinar-sobrenos'>

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
                    <Link to='/Doe'>Doe</Link>
                    <Link>Contato</Link>
                </div>

            </div>

            <div className='bem-vindo'>

                <div className='texto-bem-vindo'>
                    <h1>Sejam bem-vindos(a) à
                        ESCOLA do FREI</h1>
                    <p>O Instituto Nossa Senhora de Fátima, localizado no extremo sul de São Paulo, é uma instituição dedicada à formação de jovens de baixa renda, oferecendo oportunidades de educação e qualificação profissional. Com um compromisso firme de inclusão social, o instituto oferece vários cursos, capacitando seus alunos para o mercado de trabalho. Ao longo dos anos, o Instituto tem se destacado por seu impacto transformador na vida de jovens, promovendo não apenas conhecimento técnico, mas também habilidades comportamentais, sociais e tecnológicas essenciais para o sucesso profissional.</p>

                </div>

            </div>



        </div>
    )
}