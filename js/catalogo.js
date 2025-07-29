fetch('catalogo/productos.csv')
  .then(response => response.text())
  .then(data => {
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');
    const productos = lines.slice(1).map(line => {
      const values = line.split(',');
      const producto = {};
      headers.forEach((header, i) => producto[header.trim()] = values[i].trim());
      return producto;
    });

    const productosContainer = document.querySelector('.productos');
    const filtrosContainer = document.querySelector('.filtros');

    const tipos = [...new Set(productos.map(p => p.Tipo))];
    tipos.unshift('Todos');

    tipos.forEach(tipo => {
      const btn = document.createElement('button');
      btn.textContent = tipo;
      btn.dataset.tipo = tipo;
      btn.classList.add('filtro-btn');
      btn.onclick = () => {
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');
        renderizarProductos(tipo === 'Todos' ? productos : productos.filter(p => p.Tipo === tipo));
      };
      filtrosContainer.appendChild(btn);
    });

    let productosGlobal = [];  // guardamos todos los productos
    let indiceActual = 0;      // índice del producto actual
    renderizarProductos(productos);

    function renderizarProductos(lista) {
      productosContainer.innerHTML = '';
      productosGlobal = lista;  // guardamos la lista actual para navegar
      lista.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto';

        const imagen = document.createElement('img');
        imagen.src = `img/productos/${producto.Imagen}`;
        imagen.alt = producto.Producto;
        imagen.style.width = '100%';
        imagen.style.height = 'auto';
        imagen.style.borderRadius = '8px';
        imagen.style.marginBottom = '1rem';
        imagen.style.cursor = 'pointer';
        imagen.dataset.precio = producto.Precio;
        imagen.dataset.nombre = producto.Producto;
        imagen.addEventListener('click', () => {
          mostrarModal(imagen);
        });

        const titulo = document.createElement('h3');
        titulo.textContent = producto.Producto;

        const precio = document.createElement('p');
        precio.textContent = `$${producto.Precio}`;

        card.appendChild(imagen);
        card.appendChild(titulo);
        card.appendChild(precio);
        productosContainer.appendChild(card);
      });
    }

    function mostrarModal(imagen) {
      const modal = document.querySelector('.modal');
      const modalContenido = document.querySelector('.modal-contenido');

      const nombre = imagen.dataset.nombre;
      const precio = imagen.dataset.precio;
      const src = imagen.src;

      // Buscamos el índice del producto en productosGlobal
      indiceActual = productosGlobal.findIndex(p => p.Producto === nombre);

      modalContenido.innerHTML = nombre && precio && src ? `
        <div class="modal-card">
          <img src="${src}" alt="${nombre}" />
          <h3>${nombre}</h3>
          <p>$${precio}</p>
        </div>
      ` : '';

      if (modalContenido.innerHTML) {
        modal.style.display = 'flex';
      }
      document.body.classList.add('modal-abierto');
    }

    document.querySelector('.modal-prev').addEventListener('click', () => {
      if (productosGlobal.length === 0) return;
      indiceActual = (indiceActual - 1 + productosGlobal.length) % productosGlobal.length;
      const nuevoProducto = productosGlobal[indiceActual];
      actualizarModal(nuevoProducto);
    });

    document.querySelector('.modal-next').addEventListener('click', () => {
      if (productosGlobal.length === 0) return;
      indiceActual = (indiceActual + 1) % productosGlobal.length;
      const nuevoProducto = productosGlobal[indiceActual];
      actualizarModal(nuevoProducto);
    });

    function actualizarModal(producto) {
      const modalContenido = document.querySelector('.modal-contenido');
      modalContenido.innerHTML = `
        <div class="modal-card">
          <img src="img/productos/${producto.Imagen}" alt="${producto.Producto}">
          <h3>${producto.Producto}</h3>
          <p>$${producto.Precio}</p>
        </div>
      `;
    }

  });

  document.querySelector('.cerrar-modal').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
    document.body.classList.remove('modal-abierto');
  });

  window.addEventListener('click', e => {
    const modal = document.querySelector('.modal');
    const contenido = document.querySelector('.modal-contenido');
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-abierto');
    }
  });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.modal').style.display = 'none';
});