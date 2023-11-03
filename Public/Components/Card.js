export const productos = [
    {img: `./assets/Camiseta.png`, title: `Camiseta selección Argentina`, desc: `Camiseta Adidas de Argentina último modelo.`, cate:1, precio: 2999.99},
    {img: `https://rossettiar.vtexassets.com/arquivos/ids/515405-800-auto?v=638289947981700000&width=800&height=auto&aspect=true`, title: `Camiseta del Club Atlético River Plate`, desc: `Camiseta Adidas de Argentina último modelo.`, cate:1, precio: 2799.99},
    {img: `./assets/Camiseta.png`, title: `Camiseta selección Argentina`, desc: `Camiseta Adidas de Argentina último modelo.`, cate:1, precio: 2999.99},
    {img: `https://rossettiar.vtexassets.com/arquivos/ids/515405-800-auto?v=638289947981700000&width=800&height=auto&aspect=true`, title: `Camiseta del Club Atlético River Plate`, desc: `Camiseta Adidas de Argentina último modelo.`, cate:1, precio: 2799.99},
    {img: `./assets/JeaN.webp`, title: `Jeans`, desc: `Pantalon jean marca Calvin Klein.`, cate:2, precio: 1799.99},
    {img: `https://http2.mlstatic.com/D_NQ_NP_658023-MLA48645082603_122021-O.webp`, title: `Pantalones militares`, desc: `Pantalon militar camuflado estilo bosque`, cate:2, precio: 1499.99},
    {img: `./assets/JeaN.webp`, title: `Jeans`, desc: `Pantalon jean marca Calvin Klein.`, cate:2, precio: 1799.99},
    {img: `https://http2.mlstatic.com/D_NQ_NP_658023-MLA48645082603_122021-O.webp`, title: `Pantalones militares`, desc: `Pantalon militar camuflado estilo bosque`, cate:2, precio: 1499.99},
    {img: `./assets/Jordan.jpg`, title: `Air Jordan`, desc: `Zapatillas Air Jordan 1 Low.`, cate:3, precio: 999.99},
    {img: `https://briganti.com.ar/cdn/shop/products/HCAC00969011-01.jpg?v=1640618170`, title: `Zapatos`, desc: `Zapatos de vestir`, cate:3, precio: 1999.990},
    {img: `./assets/Jordan.jpg`, title: `Air Jordan`, desc: `Zapatillas Air Jordan 1 Low.`, cate:3, precio: 999.99},
    {img: `https://briganti.com.ar/cdn/shop/products/HCAC00969011-01.jpg?v=1640618170`, title: `Zapatos`, desc: `Zapatos de vestir`, cate:3, precio: 1999.990}
]

export const CustomCard = (img, title, desc, precio) => {
    return `
    <div class="card-body" style="text-align: center; margin: 20px;">
    <div class="card" style="width: 18rem;">
      <img src="${img}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${desc}</p> <!--Texto de ejemplo-->
      </div>
      <div class="card-footer">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <p class="card-text" style="margin-right: 10px;">${precio}</p>
          </div>
          <button type="button" class="btn btn-outline-success" style="border-radius: 75px;" onclick="increment()"><i class="bi bi-patch-plus" ></i></button>
          <input type="number" class="form-control" value="1" min="1" max="10" style="width: 75px;">
          <button type="button" class="btn btn-outline-danger"style="border-radius: 75px;" onclick="decrement()"><i class="bi bi-patch-minus"></i></button>                           
        </div>
      </div>
    </div>
    </div>
  </div>  
    `
}