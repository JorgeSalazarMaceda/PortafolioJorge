import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkMode from '../DarkMode';


export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <div>
                    <img src={'/images/Jorge.jpg'} alt="Jorge" width={120} height={120} style={{ marginRight: '10px', borderRadius: '15px'}} />
                </div>
                <span>J</span>
                <h3>orge Salazar WEB</h3>

            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink to='/inicio' className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink> {/* Con la desestructuración de objetos vemos si está activa la clase, se quede marcada en el menú, si no, no se aplica clase de css*/}
                    </li>
                    <li>
                        <NavLink to='/portafolio' className={({ isActive }) => isActive ? 'active' : ''}>Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/servicios' className={({ isActive }) => isActive ? 'active' : ''}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to='/curriculum' className={({ isActive }) => isActive ? 'active' : ''}>Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacto' className={({ isActive }) => isActive ? 'active' : ''}>Contacto</NavLink>
                    </li>
                    <li>
                        <DarkMode/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}






// Versión media querys
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// export const HeaderNav = () => {
//     const [showMenu, setShowMenu] = useState(false);

//     const toggleMenu = () => {
//         setShowMenu(!showMenu);
//     };

//     return (
//         <header className={`header ${showMenu ? 'show-menu' : ''}`}>
//             <div className='logo'>
//                 <div>
//                     <img src={'/images/Jorge.jpg'} alt="Jorge" width={120} height={120} style={{ marginRight: '10px', borderRadius: '15px'}} />
//                 </div>
//                 <span>J</span>
//                 <h3>orge Salazar WEB</h3>
//             </div>
//             <button className="menu-toggle" onClick={toggleMenu}>
//                 <div className={`bar ${showMenu ? 'open' : ''}`} />
//                 <div className={`bar ${showMenu ? 'open' : ''}`} />
//                 <div className={`bar ${showMenu ? 'open' : ''}`} />
//             </button>
//             <nav className={`nav-links ${showMenu ? 'open' : ''}`}>
//                 <ul>
//                     <li>
//                         <NavLink to='/inicio' activeClassName="active">Inicio</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/portafolio' activeClassName="active">Portafolio</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/servicios' activeClassName="active">Servicios</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/curriculum' activeClassName="active">Curriculum</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/contacto' activeClassName="active">Contacto</NavLink>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }


// Bootstrap 
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// export const HeaderNav = () => {
//     const [showMenu, setShowMenu] = useState(false);

//     const toggleMenu = () => {
//         setShowMenu(!showMenu);
//     };

//     return (
//         <header className='header'>
//             <div className='logo'>
//                 <div>
//                     <img src={'/images/Jorge.jpg'} alt="Jorge" width={120} height={120} style={{ marginRight: '10px', borderRadius: '15px' }} />
//                 </div>
//                 <span>J</span>
//                 <h3>orge Salazar WEB</h3>
//             </div>
//                 <Navbar expand="lg" className={showMenu ? 'show' : ''}>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="me-auto mb-2 mb-lg-0">
//                             <Nav.Item>
//                                 <Nav.Link as={NavLink} to='/inicio' activeClassName="active">Inicio</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link as={NavLink} to='/portafolio' activeClassName="active">Portafolio</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link as={NavLink} to='/servicios' activeClassName="active">Servicios</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link as={NavLink} to='/curriculum' activeClassName="active">Curriculum</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link as={NavLink} to='/contacto' activeClassName="active">Contacto</Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Navbar>
//         </header>
//     );
// };
