import React from 'react'
import { Link } from 'react-router-dom'
import { Contacto } from './Contacto'
import { ListadoTrabajosRandom } from './ListadoTrabajosRandom'

export const Inicio = () => {
  
  return (
    <div className='home'>

      <h1>
          ¡Hola mundo! &#128075; <br/>
          Soy Jorge, 💻 <strong>Desarrollador Web</strong>  💻 con experiencia en tecnologías como PHP, Java, JavaScript, React.js, Bootstrap, SASS, MySQL y GitHub. 
          Ofrezco mis servicios de <strong>programación y desarrollo web</strong> en Madrid. Soy seguidor de las Metodologías Ágiles y cuento con habilidades en el sector legal. <br/>
          ¡Nos vemos en el proyecto! 😄
      </h1>


      <h2 className='tittle'>¿Creamos una App?<br/><br/><Link to='/contacto'>Contacta conmigo.</Link></h2>
    
      {/* Poner carrousel de proyectos */}
      <section className='last-works'>
        <h3 className='heading'>Algunos de mis proyectos</h3>

        <div className='works'>
          <ListadoTrabajosRandom limite='2'/> {/* Pasamos una prop para que se muestren menos proyectos en inicio, el limite será 2 y lo pasamos al componente */}
        </div>
      </section>
    </div>
  )
}


