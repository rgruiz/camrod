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

    renderizarProductos(productos);

    function renderizarProductos(lista) {
      productosContainer.innerHTML = '';
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
        imagen.addEventListener('click', () => {
          mostrarModal(imagen.src, producto.Producto);
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

    function mostrarModal(src, alt) {
      const modal = document.getElementById('imagen-modal');
      const modalImg = document.getElementById('imagen-modal-grande');
      modal.style.display = 'block';
      modalImg.src = src;
      modalImg.alt = alt;
    }

    document.querySelector('.cerrar-modal').addEventListener('click', () => {
      document.getElementById('imagen-modal').style.display = 'none';
    });

    window.addEventListener('click', e => {
      const modal = document.getElementById('imagen-modal');
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });