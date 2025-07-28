<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <title>CAMROD | Encontrá toallas, acolchados, alfombras, sábanas y más productos textiles de diseño y calidad para tu hogar! 😍</title>
  <meta name="description" content="En Camrod encontrás toallas, acolchados, alfombras, sábanas y más productos textiles de diseño y calidad para tu hogar.">
  <meta name="keywords" content="textiles, toallas, acolchados, sabanas, hogar, alfombras, ropa blanca, blanqueria, juego de cama, dormitorio, baño, Camrod, Camrod Textiles">
  <meta name="author" content="Camrod">
  <meta name="robots" content="index, follow">

  <!-- Open Graph (Facebook, LinkedIn, etc.) -->
  <meta property="og:title" content="CAMROD" />
  <meta property="og:description" content="En Camrod encontrás toallas, acolchados, alfombras, sábanas y más productos textiles de diseño y calidad para tu hogar." />
  <meta property="og:image" content="https://camrod.com.ar/img/hero-3.png" />
  <meta property="og:url" content="https://camrod.com.ar/" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CAMROD" />
  <meta name="twitter:description" content="En Camrod encontrás toallas, acolchados, alfombras, sábanas y más productos textiles de diseño y calidad para tu hogar." />
  <meta name="twitter:image" content="https://camrod.com.ar/img/hero-3.png" />

  <!-- Idioma -->
  <meta name="language" content="es" />

  <!-- Favicon -->
  <link rel="icon" href="img/logoico.png" type="image/png" />

  <!-- Tipografías -->
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Commissioner:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Estilos -->
  <link rel="stylesheet" href="css/estilos.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

  <!-- Scripts -->
  <script defer src="js/catalogo.js"></script>
  <script defer src="js/navbar.js"></script>
  <script defer src="js/carousel.js"></script>
</head>
<body>

  <header>
    <nav class="navbar">
        <!-- Logo a la izquierda -->
        <div class="logo-wrapper">
            <a href="#hero"><img src="img/camrod_logo.png" alt="Camrod" class="logo"></a>
        </div>

        <!-- Menú centrado solo en desktop -->
        <div class="menu menu-desktop">
            <ul>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#sobre">Sobre Nosotros</a></li>
            </ul>
        </div>

        <!-- Botón hamburguesa solo visible en mobile -->
        <div class="menu-toggle" onclick="document.querySelector('.menu-mobile').classList.toggle('active')">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <!-- Menú mobile: incluye los anchors + contacto -->
        <div class="menu menu-mobile">
            <ul>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#sobre">Sobre Nosotros</a></li>
            <li><a href="#contacto" class="boton-contacto">Contacto</a></li>
            </ul>
        </div>

        <!-- Botón de contacto solo en desktop -->
        <div class="contacto-btn">
            <a href="#contacto" class="boton-contacto">Contacto</a>
        </div>
    </nav>
  </header>

  <div class="carousel">
    <div class="slides">
      <div class="slide"><img src="img/hero-6.png" alt="Acolchados y sabanas negras"></div>
      <div class="slide"><img src="img/hero-3.png" alt="Toallas y alfombra de baño"></div>
      <div class="slide"><img src="img/hero-4.png" alt="Cama con ropa blanca color terracota"></div>
    </div>
    <div class="indicators">
      <div data-index="0" class="active"></div>
      <div data-index="1"></div>
      <div data-index="2"></div>
    </div>
  </div>

  <section id="catalogo" class="catalogo">
    <h2 class="titulo-seccion">Nuestro catálogo de productos</h2>
    <div class="filtros"></div>
    <div class="productos"></div>
    </section>

  <section id="sobre" class="sobre">
    <h2>Sobre Nosotros</h2>
    <p>Somos un emprendimiento familiar dedicado a ofrecer productos textiles de calidad, diseñados con amor y dedicación. Queremos que cada rincón de tu casa sea un espacio cálido y confortable.</p>
  </section>

    <section id="contacto" class="contacto">
        <h2>Contacto</h2>
        <p>Podés escribirnos por:</p>
        <ul class="iconos-contacto">
            <li>
            <a href="mailto:camrodtextiles@gmail.com" title="Email">
                <i class="fas fa-envelope"></i>
            </a>
            </li>
            <li>
            <a href="https://wa.me/5491161745328" target="_blank" title="WhatsApp">
                <i class="fab fa-whatsapp"></i>
            </a>
            </li>
            <li>
            <a href="https://instagram.com/camrod_ok" target="_blank" title="Instagram">
                <i class="fab fa-instagram"></i>
            </a>
            </li>
        </ul>
    </section>

    <footer class="footer">
      <p>&copy; <?php echo date("Y"); ?> CAMROD. Todos los derechos reservados.</p>
    </footer>
    <div id="imagen-modal" class="modal">
        <span class="cerrar-modal">&times;</span>
        <img class="modal-contenido" id="imagen-modal-grande">
    </div>
    </body>
</html>