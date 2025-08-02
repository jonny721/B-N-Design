
const products = [
  {
    id: "01",
    name: "Lampara Aurea",
    description: "¡Ilumina tu espacio con estilo! Nuestra lámpara colgante combina diseño moderno y funcionalidad, con un acabado elegante que realza cualquier ambiente. Perfecta para comedores, salas o dormitorios, ofrece una luz cálida y acogedora. ¡Transforma tu hogar con un toque de sofisticación!",
    price: 35000,
    stock: 15,
    category: "comedor",
    img: "../lamparaColgante.jpg",
  },
  {
    id: "02",
    name: "Sillón Chester",
    description: "¡Eleva tu living con nuestro Sillón Chester de 3 cuerpos! Forrado en cuero premium, ofrece confort y estilo atemporal. Sus patas de madera aportan un toque rústico y elegante, ideal para cualquier espacio. ¡Perfecto para relax o reuniones!",
    price: 320000,
    stock: 7,
    category: "living",
    img: "../sillonCuero.jpg",
  },
  {
    id: "03",
    name: "Mesa de Luz Vintage",
    description: "¡Añade un toque nostálgico con la Mesa de Luz Vintage! Su diseño retro con patas de madera tallada y un cajón espacioso combina charme y funcionalidad. Perfecta para un velador o tus esenciales, eleva cualquier dormitorio con su elegancia atemporal.",
    price: 48000,
    stock: 26,
    category: "dormitorio",
    img: "../mesaDeLuz.jpg",
  },
  {
    id: "04",
    name: "Sillón Urban",
    description: "¡Redefine tu espacio con el Sillón Urban! Su diseño moderno con líneas limpias y tapizado premium ofrece confort y sofisticación. Perfecto para livings contemporáneos, es la pieza ideal para un estilo audaz y elegante.",
    price: 430000,
    stock: 3,
    category: "living",
    img: "../sillonGrande.jpg",
  },
];

//crear una promesa que retorne el array de productos

export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error, intente mas tarde");
      } else {
        resolve(products);
      }
    }, 2000);
  });
};

export const getOneProduct = (id) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            //buscan el prod con el id que se recibe del parametro
            let oneProduct = products.find((prod)=> prod.id === id)
            //lo devolvemos
            resolve(oneProduct)
        },2000)
    })
} 