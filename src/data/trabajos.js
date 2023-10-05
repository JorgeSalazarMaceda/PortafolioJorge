/* Aquí irán todos los proyectos.
1- Se hace una variable con un array de objetos que contenga los trabajos
2- Vamos a tener una carpeta de imágenes (dentro de public) cuyo nombre de cada imagen será el id del trabajo para mostrarlo en la página
3- Para mostrarlo en Portafolio, tendrás que importar trabajos en Portafolio.js
4- Renderizarlo en Portafolio.js recorriendo los trabajos con un map y haciendo una función callback (es decir con un return que devuelva el dato del obj y su key identificativa)
Estás usando JSX --> Es decir, JS mezclado con HTML
5- Una vez lo muestras, puedes hacer en el nombre un link directo al trabajo.
*/

export const trabajos = [
    {
        'id':'eVentalia',
        'nombre':'eVentalia',
        'url':'https://www.youtube.com/watch?v=8ui9umU0C2g&ab_channel=manchesterorchVEVO',
        'tecnologias':'PHP, CSS, Bootstrap, API PHPMailer, API Conekta y phpmyadmin',
        'categorias':'Red Social',
        'descripcion':'Red Social para creación de eventos, con registro y creación personal del perfil de usuario, reseñas, inserción de imágenes, iconos informativos, responsive, CRUD, MVC, Foro de conversación.'
    },    
    {
        'id':'videoclub',
        'nombre':'Videoclub',
        'url':'https://videoclubreact.netlify.app/',
        'tecnologias':'JS, React, HTML5 y CSS',
        'categorias':'Gestor de Datos (CRUD)',
        'descripcion':'App developed with the React framework for managing a video rental store using local storage.'
    },
    {
        'id':'inmobiliaria',
        'nombre':'Inmobiliaria',
        'url':'https://www.youtube.com/watch?v=8ui9umU0C2g&ab_channel=manchesterorchVEVO',
        'tecnologias':'PHP, HTML5, CSS, phpmyadmin y AJAX',
        'categorias':'Gestor de Datos (CRUD)',
        'descripcion':'App desarrollada en PHP, HTML, CSS y AJAX que gestiona las publicaciones, filtrados de búsqueda y perfiles usuario y de inmuebles.'
    },
    {
        'id':'jorgelogica',
        'nombre':'JorgeLogica_Responsive',
        'url':'https://jorgelogica.netlify.app/',
        'tecnologias':'HTML5, Bootstrap y Grid',
        'categorias':'Responsive',
        'descripcion':'Página realizada con Bootstrap y Grid para hacerla totalmente Responsive.'
    },
    {
        'id':'gitJorge',
        'nombre':'GitHub de Jorge',
        'url':'https://github.com/JorgeSalazarMaceda',
        'tecnologias':'HTML, CSS, Bootstrap, PHP, MySql',
        'categorias':'Repositorio',
        'descripcion':'Lorem Ipsum'
    }
];