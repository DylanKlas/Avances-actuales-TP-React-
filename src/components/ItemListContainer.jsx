import React from "react";
import Greetings from "./Greetings";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const mensajePrincipal = ["Bienvenido a Lapse! ", "Elija por Categoría"];
  const mensajeSecundario = [
    "Sentite cómodo de explorar los nuevos diseños",
    "Pruebe por su estilo",
  ];
  let home = true; //Dice si estamos en Home o en alguna categoría

  let hijo = "item";

  //Detecta el nombre de la categoría
  const { categoria } = useParams();

  const productosDB = [
    {
      id: "001",
      nombre: "Lapse - Platinum Mode",
      precio: 150000,
      categoria: "Platinum",
      imagen: "",
      alt: "Imagen de Reloj Platinum Mode",
      stock: 10,
      descripcion:
        "Su collar de Plata y engranajes de Platino hacen que este reloj sea una auténtica maquina del tiempo.",
    },
    {
      id: "002",
      nombre: "Lapse - Platinum JKLast",
      precio: 130000,
      categoria: "Platinum",
      imagen: "",
      alt: "Imagen de Reloj Platinum JKLast",
      stock: 10,
      descripcion:
        "Plata 100%. Quien hubiera pensado que Lapse hubiera sacado este último modelo en su gama más alta de exhibición.",
    },
    {
      id: "003",
      nombre: "Lapse - Business XXII",
      precio: 220000,
      categoria: "Business",
      imagen: "",
      alt: "Imagen de Reloj Business XXII",
      stock: 10,
      descripcion:
        "Usted crea su historia. Alfabeto Romano, brazalete de oro, esta maquina es solo para los valientes.",
    },
    {
      id: "004",
      nombre: "Lapse - Business Ultimatum 3DF",
      precio: 180000,
      categoria: "Business",
      imagen: "",
      alt: "Imagen de Reloj Business Ultimatum",
      stock: 10,
      descripcion:
        "Tecnología e Información. Este reloj es para los amantes de las nuevas oportunidades, que les gusta estar siempre un paso adelante.",
    },
    {
      id: "005",
      nombre: "Lapse - Classic Gold",
      precio: 135000,
      categoria: "Classic",
      imagen: "",
      alt: "Imagen de Reloj Classic Gold",
      stock: 10,
      descripcion:
        "Clasico, Fino. Este reloj de oro con pulsera de cuero es elegante tan solo con mirarlo.",
    },
    {
      id: "006",
      nombre: "Lapse - Classic Minimalism",
      precio: 130000,
      categoria: "Classic",
      imagen: "",
      alt: "Imagen de Reloj Classic Minimalism",
      stock: 10,
      descripcion:
        "Menos es más, el minimalismo como protocolo de una vida organizada.",
    },
    {
      id: "007",
      nombre: "Lapse - Serious Black",
      precio: 165000,
      categoria: "Serious",
      imagen: "",
      alt: "Imagen de Reloj Serious Black",
      stock: 10,
      descripcion: "Negro. Fino. Serio. Este reloj lo lleva a donde quiera.",
    },
    {
      id: "008",
      nombre: "Lapse - Serious Marine",
      precio: 165000,
      categoria: "Serious",
      imagen: "",
      alt: "Imagen de Reloj Serious Marine",
      stock: 10,
      descripcion:
        "Quiere llegar a lo más alto? Este reloj azul marino lo usa quien se atreve a navegar por los mares hacia su meta.",
    },
  ];

  const mostrarProductosDB = new Promise((resolve, reject) => {
    productosDB.length > 0
      ? setTimeout(() => {
          resolve(productosDB);
        }, 2000)
      : reject(console.log("Productos no disponibles, Promesa rechazada"));
  });

  // Una Pregunta: Al final no entiendo el sentido de la promesa si tenemos la base de datos nosotros.
  mostrarProductosDB.then((resolve) => resolve).catch((reject) => reject);

  //Dice que se muestre los productos de la categoría que detectó el useParams
  let queProductosMostrar = productosDB.filter(
    (productosDB) => productosDB.categoria === categoria
  );

  //Para detectar si me tomo alguna categoría. En caso de que no, quiere decir que estamos en Home y vamos a mostrar toda la Base de Datos.
  queProductosMostrar.length > 0
    ? (home = false)
    : (home = true) && (queProductosMostrar = productosDB);

  return (
    <>
      <div className="mt-4 mb-4">
        {
          //Pregunta si estamos en "Home", y en caso de que sí, nos muestra el mensaje de bienvenida.
          home ? (
            <Greetings
              mensajePrincipal={mensajePrincipal[0]}
              mensajeSecundario={mensajeSecundario[0]}
            />
          ) : (
            <Greetings
              mensajePrincipal={mensajePrincipal[1]}
              mensajeSecundario={mensajeSecundario[1]}
            />
          )
        }
      </div>

      {/* Muestra los productos seleccionados, ya sea todos si estamos en "Home", o los de la categoria si estamos en `/category` */}
      <div>
        <ItemList productosDB={queProductosMostrar} hijo={hijo} />
      </div>
    </>
  );
};

export default ItemListContainer;
