const url = 'http://127.0.0.1:5500/Public/'

const NavElements = [
    {title: 'Prendas Masculinas', link: `${url}Categoria1.html`},
    {title: 'Prendas Femeninas', link: `${url}Categoria2.html`},
    {title: 'Joyería', link: `${url}Categoria3.html`},
]

export const navbarComponent = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="Home.html">Gino's Store...</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      ${
        NavElements.map(e => {
            return `
            <li class="nav-item">
                <a class="nav-link" href=${e.link}>${e.title}</a>
            </li>
            `
        }).join('')
      }
    </ul>
    <div class="ms-auto">
     <form class="d-flex" role="search">
        <a href="Carrito.html" class="btn btn-outline-info custom-btn-carrito d-flex align-items-center" style="margin-right: 5px;"><i class="bi bi-cart4"></i></a>
        <a href="index.html"class="btn btn-outline-danger custom-btn-close d-flex align-items-center"><i class="bi bi-box-arrow-right"></i></a>
      </form>
    </div>
  </div>      
  
</div>
</nav>
`