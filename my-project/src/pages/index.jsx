import './index.scss'

export default function Site() {
    return (
        
        <div className='conteinar-site'>

            <div className='conteinar-tags'>

                <div className='logo'>
                    <img src="/public/assets/images/logofrei.jpeg" alt="logoFrei" />
                    <h2>Instituto Nossa <br /> Senhora <br /> De Fátima</h2> 
                </div>

                <div className='tags'>
                    <p>Inicio</p>
                    <p>Sobre Nós</p>
                    <p>Cursos</p>
                    <p>Galeria</p>   
                    <p>Doe</p>
                    <p>Contato</p>
                </div>


            </div>

            <div className='conteinar-numeros'>

                <div className='inscricao'>
                    
                     <p className='titleP'>
                        Faça já sua inscrição para participar<br />
                        da nossa feira de profissões!
                        </p>
              


                    <div className='button'>
                        <button>Inscreva-se</button>
                    </div>

                </div>

                    <div className='imagemFrei'>
                        <img src="/public/assets/images/imagemFrei.png" />  
                    </div>                     
            </div>

            <h1 className='frase'>“Esforço que  transforma, e o orgulho permanece”.</h1>

            <div className="ApresentacaoCurso">

                <p>teste</p>
            </div>

        </div>
    )
}