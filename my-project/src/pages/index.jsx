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
                    <h3>Inicio</h3>
                    <h3>Sobre Nós</h3>
                    <h3>Cursos</h3>
                    <h3>Notícias/Galeria</h3>   
                    <h3>Doe</h3>
                    <h3>Contato</h3>
                </div>


            </div>

            <div className='conteinar-numeros'>
                    <img src="/public/assets/images/imagemFrei.jpeg" alt="logoFrei" />
                        <p>ola meu nome e gustavo fiz frei no ano de tal</p>
                    
            </div>
        </div>
    )
}